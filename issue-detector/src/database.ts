// src/database.ts
import { createConnection } from 'typeorm';
import { Issue } from './entity/Issue';

export const connectDB = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Admin',
      database: 'issuedetector',  
      entities: [Issue],
      synchronize: true,  
    });
    console.log('Connected to PostgreSQL database successfully!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};
