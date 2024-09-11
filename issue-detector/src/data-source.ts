import { DataSource } from 'typeorm';
import { Issue } from './entity/Issue';

// Define and export your DataSource configuration
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
