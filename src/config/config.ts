import dotenv from "dotenv"

dotenv.config({
    quiet: true
})

interface IConfig {
    port: number
    nodeEnv: string
}

const config: IConfig = {
    port: Number(process.env.PORT),
    nodeEnv: process.env.NODE_ENV || "development"
}

export default config