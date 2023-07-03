import { App } from "./app";
import { PORT } from "./env";



const port = PORT || 8080;
new App().server.listen(port, () => console.info(`Server running on port ${port}`));
