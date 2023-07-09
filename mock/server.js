import jsonServer from "json-server";
import { createSignature } from "./createSignature.js";
const server = jsonServer.create();

server.use(jsonServer.bodyParser);
server.use(jsonServer.defaults());

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.userId = 11;
    req.body.createdAt = new Date().toISOString();
  }
  next();
});

server.post("/posts", (req, res, next) => {
  const { imageUpload } = req.body;
  req.body.image = imageUpload.publicId;
  delete req.body.imageUpload;
  next();
});

server.patch("/posts/:id", (req, res, next) => {
  const { imageUpload } = req.body;
  if (imageUpload) {
    req.body.image = imageUpload.publicId;
    delete req.body.imageUpload;
  }
  next();
});

server.post("/auth/login", (req, res) => {
  return res.jsonp({
    user: {
      id: "11",
      name: "Fernando Santos",
      email: "fernando.santos@example.com",
      phone: "+55 84 91234-5678",
      createdAt: "2023-07-07T12:45:00Z",
      description:
        "Fernando Santos is a passionate software engineer with over 5 years of experience in building web applications. He specializes in front-end development and has worked on numerous projects using technologies like React, Angular, and Vue.js. Fernando is a strong advocate for clean and maintainable code, and he always strives to deliver high-quality solutions that meet the clients' requirements. In his free time, he enjoys playing guitar, reading books, and exploring new technologies.",
    },
    token: "sfnkdankfdandiifornkwekfknri",
  });
});

server.get("/users/me", (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send(null);
  }
  return next();
});

server.delete("/users/me", (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send();
  }
  return res.status(200).send();
});

server.get("/upload/signature", (req, res) => {
  const { timestamp, signature } = createSignature();
  return res.json({ timestamp, signature });
});

// end of custom middlewares

server.use(
  jsonServer.rewriter({
    "/users/me": "/users/11",
    "/users/:id": "/users/:id?_embed=posts",
    "/posts/:id": "/posts/:id?_expand=user",
    "/posts": "/posts?_sort=createdAt&_order=desc",
    "/posts/:id/comments": "/comments?_expand=user&_sort=createdAt&_order=desc",
  })
);

server.use(jsonServer.router("db.json"));

server.listen(3000, () => {
  console.info("JSON Server is running");
});
