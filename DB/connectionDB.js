import {createPool} from  'mysql2/promise';
export const pool = createPool({
    host: 'localhost',
    port: 3000,
    database: 'mydb',
    user: 'root',
    password: 'password'});


