// import { CronJob } from 'cron';
// import { Issue } from '../entity/Issue'; // Assuming Issue is a TypeORM entity

// const job = new CronJob(
//   '* * * * *', // Runs every minute
//   let ABC = async  () {
//     try {
//       // Fetch pending issues using TypeORM repository
//       const pendingIssues = await Issue.find({
//         where: { issueStatus: 'pending' },
//       });

//       console.log('Pending Issues:', pendingIssues);
//     } catch (error) {
//       console.error('Error fetching pending issues:', error);
//     }
//   },
//   null, // onComplete callback
//   true, // Start the job right after initialization
//   'America/Los_Angeles' // Timezone
// );

// // Ensure the CronJob starts
// job.start();
