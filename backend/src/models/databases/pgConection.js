import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: '172.22.249.80',
  database: 'postgres',
  password: '123456',
  port: 5433,
});
