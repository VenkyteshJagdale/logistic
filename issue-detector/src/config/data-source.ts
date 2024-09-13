import { DataSource } from 'typeorm';
import { Issue } from '../entity/Issue';

//Main DB
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Admin',
    database: 'issuedetector',
    entities: [Issue],
    synchronize: false,
});


// Suite Database (Read-Only)
export const SuiteDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',  
    port: 5432,
    username: 'postgres',  
    password: 'Admin',
    database: 'suite_db', 
    entities: [Issue],
    synchronize: false
});