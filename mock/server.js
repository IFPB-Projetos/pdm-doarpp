// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.post("/echo", (req, res) => {
  res.jsonp(req.query);
});

server.post("/auth/login", (req, res) => {
  return res.jsonp({
    id: "11",
    name: "Fernando Santos",
    email: "fernando.santos@example.com",
    phone: "+55 84 91234-5678",
    createdAt: "2023-07-07T12:45:00Z",
    description:
      "Fernando Santos is a passionate software engineer with over 5 years of experience in building web applications. He specializes in front-end development and has worked on numerous projects using technologies like React, Angular, and Vue.js. Fernando is a strong advocate for clean and maintainable code, and he always strives to deliver high-quality solutions that meet the clients' requirements. In his free time, he enjoys playing guitar, reading books, and exploring new technologies.",
  });
});

server.use(
  jsonServer.rewriter({
    "/auth/login": "/users/1",
    "/ngos/:id": "/ngos/:id?_embed=posts",
    "/posts/:id": "/posts/:id?_expand=ngo",
  })
);

server.use(router);
server.listen(3000, () => {
  console.info("JSON Server is running");
});
