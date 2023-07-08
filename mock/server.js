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
  console.log("here");
  return res.jsonp({
    id: "1",
    name: "Gustavo Silva",
    email: "gustavo.silva@example.com",
    phone: "+55 21 91234-5678",
    createdAt: "2023-07-06T14:30:00Z",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
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
