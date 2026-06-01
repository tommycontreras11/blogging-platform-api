
import { config } from "./config/config"
import app from "./app"

app.listen(config.PORT, () => console.log(`The server is running on port ${config.PORT}`))