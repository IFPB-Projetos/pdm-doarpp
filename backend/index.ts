import { app } from "./app";
import { PORT } from "./env";

const port = PORT || 8080;
app.listen(port, () => console.info(`Server running on port ${port}`));
