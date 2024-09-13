import express from 'express';
import 'reflect-metadata';
import { AppDataSource,SuiteDataSource  } from './config/data-source';
import issueRoutes from './routes/issueRoutes';
import dbRoutes from './routes/dataRoutes';
import cors from 'cors';
import { connectRabbitMQ } from './rabitMQ/rabbitmq';


const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.json());

// Use issue routes
app.use('/api', issueRoutes);
app.use('/api/db', dbRoutes);

connectRabbitMQ();

async function initializeDataSources() {
  try {
      await AppDataSource.initialize();
      console.log('Main database connection established.');

      await SuiteDataSource.initialize();
      console.log('Suite database (read-only) connection established.');

      app.listen(PORT, () => {
          console.log(`Connected to PostgreSQL databases successfully!`);
          console.log(`Server running on port ${PORT}`);
      });
  } catch (error) {
      console.error('Error during DataSource initialization:', error);
  }
}

initializeDataSources();
