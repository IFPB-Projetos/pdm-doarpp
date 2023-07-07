import { app } from "./app";
import "./config/models";
import { PORT } from "./env";

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
