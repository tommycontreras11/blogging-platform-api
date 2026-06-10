
import { config } from "./config/config"
import app from "./app"
import { initRedis } from "./database/redis"

initRedis()
app.listen(config.PORT, () => console.log(`The server is running on port ${config.PORT}`))