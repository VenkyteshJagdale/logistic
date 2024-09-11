import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Issue } from '../entity/Issue';

const issueRepository = AppDataSource.getRepository(Issue);

// Create a new issue
export const createIssue = async (req: Request, res: Response) => {
  try {
    const { issueId, issueType, issueDescription, userName } = req.body;
    const newIssue = issueRepository.create({
      issueId,
      issueType,
      issueDescription,
      userName,
    });
    await issueRepository.save(newIssue);
    return res.status(201).json(newIssue);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating issue', error });
  }
};

// Get a list of issues with pagination (limit 10)
export const getIssues = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const issues = await issueRepository.find({
      take: 10,
      skip: (page - 1) * 10,
      order: { createdAt: 'DESC' },
    });
    return res.status(200).json(issues);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching issues', error });
  }
};

// // Get a specific issue by issueId
// export const getIssueById = async (req: Request, res: Response) => {
//   try {
//     const { issueId } = req.params;
//     const issue = await issueRepository.findOne({ where: { issueId } });
//     if (!issue) {
//       return res.status(404).json({ message: 'Issue not found' });
//     }
//     return res.status(200).json(issue);
//   } catch (error) {
//     return res.status(500).json({ message: 'Error fetching issue', error });
//   }
// };

// // Get a specific issue
export const getAllIssues = async (req: Request, res: Response) => {
    try {
      const { issueStatus } = req.query; 
      const status = issueStatus || 'pending'; 
      const issues = await issueRepository.find({
        where: { issueStatus: status },
      });
  
      if (issues.length === 0) {
        return res.status(404).json({ data: [] });
      }
  
      return res.status(200).json({ data: issues });
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching issues', error });
    }
  };
  
  

// Update an issue by issueId
export const updateIssue = async (req: Request, res: Response) => {
  try {
    const { issueId } = req.params;
    const issue = await issueRepository.findOne({ where: { issueId } });
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    const updatedIssue = await issueRepository.save({ ...issue, ...req.body });
    return res.status(200).json(updatedIssue);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating issue', error });
  }
};

// Delete an issue by issueId
export const deleteIssue = async (req: Request, res: Response) => {
  try {
    const { issueId } = req.params;
    const issue = await issueRepository.findOne({ where: { issueId } });
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    await issueRepository.remove(issue);
    return res.status(200).json({ message: 'Issue deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting issue', error });
  }
};
