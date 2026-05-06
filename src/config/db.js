import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_ikFxgRwZl6C9@ep-cold-wave-aplj7r9o-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})


