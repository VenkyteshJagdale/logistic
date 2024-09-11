// // src/detection-service.ts
// import { mockIssueRepository } from './mock-database'; // Import mocked repository
// import { Issue } from './entity/Issue'

// const detectIssues = async () => {
//   try {
//     // Simulate fetching issues from core service
//     const issuesFromCore = await fetch('https://core-service-url/api/check').then(res => res.json());
    
//     for (const issue of issuesFromCore) {
//       const existingIssue = await mockIssueRepository.findOne({ where: { issueId: issue.id } });

//       if (existingIssue) {
//         if (issue.status === 'resolved') {
//           // Update issue status
//           existingIssue.issueStatus = 'Resolved';
//           await mockIssueRepository.save(existingIssue);
//         }
//       } else {
//         // Create new issue
//         const newIssue = new Issue();
//         newIssue.issueId = issue.id;
//         newIssue.issueType = issue.type;
//         newIssue.issueDescription = issue.description;
//         newIssue.issueStatus = 'Detected';
//         newIssue.userName = issue.userName;
//         await mockIssueRepository.save(newIssue);
//       }
//     }

//     console.log('Issue detection complete');
//   } catch (error) {
//     console.error('Error detecting issues:', error);
//   }
// };

// export { detectIssues };
