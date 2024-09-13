import { Router } from 'express';
import {
  createIssue,
  getIssues,
  //getIssueById,
  updateIssue,
  deleteIssue,
} from '../controller/issueController';

const router = Router();

router.post('/issues', createIssue);             
router.get('/issues', getIssues);              
//router.get('/issues/:issueId', getIssueById);    
router.put('/issues/:issueId', updateIssue);    
router.delete('/issues/:issueId', deleteIssue);

export default router;
