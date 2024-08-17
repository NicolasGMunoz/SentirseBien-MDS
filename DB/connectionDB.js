import {createPool} from  'mysql2/promise'; // Import the createPool function from the mysql2/promise module
export const pool = createPool({
    host: 'localhost',
    port: 3000,
    database: 'mydb',
    user: 'root',
    password: 'password'});


