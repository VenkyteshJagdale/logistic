import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import issueRoutes from './routes/issueRoutes';
import cors from 'cors'; // Import the CORS package

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors({
  origin: '*', // Allows all origins. You can replace '*' with a specific origin if needed
  methods: 'GET,POST,PUT,DELETE', // Allow specific HTTP methods
  allowedHeaders: 'Content-Type, Authorization' // Specify allowed headers
}));

app.use(express.json());

// Set up periodic issue detection
// setInterval(detectIssues, 60000); // Check for issues every minute

// Use issue routes
app.use('/api', issueRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to PostgreSQL database successfully!');
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error initializing the data source', error);
  });
