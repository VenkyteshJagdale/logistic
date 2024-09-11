import { Router } from 'express';
import {
  createIssue,
  getIssues,
  //getIssueById,
  updateIssue,
  deleteIssue,
} from '../controller/issueController';

const router = Router();

router.post('/issues', createIssue);             // Create an issue
router.get('/issues', getIssues);                // Get issues (with pagination)
//router.get('/issues/:issueId', getIssueById);    // Get issue by ID
router.put('/issues/:issueId', updateIssue);     // Update issue by ID
router.delete('/issues/:issueId', deleteIssue);  // Delete issue by ID

export default router;
