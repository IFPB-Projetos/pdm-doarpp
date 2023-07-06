import { App } from "./app";
import { PORT } from "./env";
import { router } from "./router";

const app = new App().server;


app.use(router);





const port = PORT || 8080;

app.listen(port, () => console.info(`Server running on port ${port}`));