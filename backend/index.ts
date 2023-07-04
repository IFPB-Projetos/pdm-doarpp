import { App } from "./app";
import { PORT } from "./env";

const app = new App().server;









const port = PORT || 8080;
app.listen(port, () => console.info(`Server running on port ${port}`));