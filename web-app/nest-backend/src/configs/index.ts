import { config } from 'dotenv';

config()

export const configs = {
    DB_HOST: `${process.env.DB_HOST}`,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_USERNAME: `${process.env.DB_USERNAME}`,
    DB_PASSWORD: `${process.env.DB_PASSWORD}`,
    DB_NAME: `${process.env.DB_NAME}`
}