// // src/mock-database.ts
// import { DataSource } from 'typeorm';
// import { Issue } from './entity/Issue';

// // Mock DataSource setup
// export const mockDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'Admin',
//   database: 'mock',
//   entities: [Issue],
//   synchronize: true,
// });

// // Initialize mockDataSource and export mock repository
// export const mockIssueRepository = mockDataSource.getRepository(Issue);
