// prisma.config.ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: env('DATABASE_URL'), // aquí Prisma leerá tu URL (Railway)
    },
})
