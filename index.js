// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const FILE_PATH = './date.json';

// const makeCommit = async (n) => {
//   if (n === 0) {
//     console.log("Pushing commits...");
//     return simpleGit().push();
//   }

//   const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   // Generate random time within the last 24 hours
//   const randomHoursAgo = randomInt(0, 23); // Random number of hours ago
//   const randomMinutes = randomInt(0, 59); // Random minute
//   const randomSeconds = randomInt(0, 59); // Random second

//   const DATE = moment()
//     .subtract(randomHoursAgo, 'hours') // Subtract random hours within 24 hours
//     .set({
//       minute: randomMinutes,
//       second: randomSeconds,
//     })
//     .format(); // Format with time

//   const date = { date: DATE };

//   try {
//     console.log(`Committing for date: ${DATE}`);
//     await jsonfile.writeFile(FILE_PATH, date);
//     await simpleGit().add([FILE_PATH]);
//     await simpleGit().commit(DATE, { '--date': DATE });
//     makeCommit(n - 1); // Recursively call with reduced count
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// makeCommit(2); // Make 5 commits within the last day

// Continue 10 day 

// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const FILE_PATH = './date.json';

// const makeCommit = async (days) => {
//   if (days.length === 0) {
//     console.log("Pushing commits...");
//     return simpleGit().push();
//   }

//   const day = days.pop(); // Take the last day from the array
//   const randomHours = Math.floor(Math.random() * 24); // Random hour
//   const randomMinutes = Math.floor(Math.random() * 60); // Random minute
//   const randomSeconds = Math.floor(Math.random() * 60); // Random second

//   const DATE = moment()
//     .subtract(day, 'days') // Subtract the day from now
//     .set({
//       hour: randomHours,
//       minute: randomMinutes,
//       second: randomSeconds,
//     })
//     .format(); // Format with time

//   const date = { date: DATE };

//   try {
//     console.log(`Committing for date: ${DATE}`);
//     await jsonfile.writeFile(FILE_PATH, date);
//     await simpleGit().add([FILE_PATH]);
//     await simpleGit().commit(DATE, { '--date': DATE });
//     await makeCommit(days); // Recursively call with the remaining days
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// const last10Days = Array.from({ length: 10}, (_, i) => i); // Generate an array [0, 1, 2, ..., 9]
// makeCommit(last10Days);













// for random 10 day
// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const FILE_PATH = './date.json';

// const makeCommit = async (n) => {
//   if (n === 0) {
//     console.log("Pushing commits...");
//     return simpleGit().push();
//   }

//   const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   // Generate random date and time within the past 10 days
//   const daysAgo = randomInt(0, 10); // Random number of days in the past
//   const randomHours = randomInt(0, 23); // Random hour
//   const randomMinutes = randomInt(0, 59); // Random minute
//   const randomSeconds = randomInt(0, 59); // Random second

//   const DATE = moment()
//     .subtract(daysAgo, 'days') // Subtract random number of days within 10 days
//     .set({
//       hour: randomHours,
//       minute: randomMinutes,
//       second: randomSeconds,
//     })
//     .format(); // Format with time

//   const date = { date: DATE };

//   try {
//     console.log(`Committing for date: ${DATE}`);
//     await jsonfile.writeFile(FILE_PATH, date);
//     await simpleGit().add([FILE_PATH]);
//     await simpleGit().commit(DATE, { '--date': DATE });
//     makeCommit(n - 1); // Recursively call with reduced count
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// makeCommit(10); // Make 10 commits


// // ************** specificDate*************************
// const jsonfile = require('jsonfile');
// const simpleGit = require('simple-git');
// const FILE_PATH = './date.json';

// const makeCommit = async (n, specificDate) => {
//   if (n === 0) {
//     console.log("Pushing commits...");
//     try {
//       await simpleGit().push();
//       console.log("All commits pushed successfully!");
//     } catch (err) {
//       console.error("Error pushing commits:", err);
//     }
//     return;
//   }

//   const date = { date: specificDate };

//   try {
//     console.log(`Committing for date: ${specificDate}`);
//     await jsonfile.writeFile(FILE_PATH, date); // Write the specific date to the JSON file
//     const git = simpleGit(); // Initialize git instance
//     await git.add([FILE_PATH]); // Stage the changes
//     await git.commit('update text.txt', { '--date': specificDate }); // Use specific date
//     await makeCommit(n - 1, specificDate); // Recursive call
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// // Example: Set your desired specific date here (ISO 8601 format preferred)
// const specificDate = '2024-11-22T01:20:49+05:30'; // Replace with your specific date
// makeCommit(1, specificDate);

const fs = require('fs');
const simpleGit = require('simple-git');
const FILE_PATH = './index.html';

const makeCommit = async (n, specificDate) => {
  if (n === 0) {
    console.log("Pushing commits...");
    try {
      await simpleGit().push();
      console.log("All commits pushed successfully!");
    } catch (err) {
      console.error("Error pushing commits:", err);
    }
    return;
  }

  // Har commit me unique content daalne ke liye
  const content = `<!-- Commit on ${specificDate} | Random: ${Math.random()} -->\n`;

  try {
    console.log(`Committing for date: ${specificDate}`);
    
    // index.html file me naye line append karo
    fs.appendFileSync(FILE_PATH, content);

    const git = simpleGit();
    await git.add([FILE_PATH]);
    await git.commit('update index.html', { '--date': specificDate });

    await makeCommit(n - 1, specificDate);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

// Example date
const specificDate = '2025-04-16T01:20:49+05:30';
makeCommit(1, specificDate);





// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const FILE_PATH = './date.json';

// const makeCommit = async (n) => {
//   if (n === 0) {
//     console.log("Pushing commits...");
//     try {
//       await simpleGit().push();
//       console.log("All commits pushed successfully!");
//     } catch (err) {
//       console.error("Error pushing commits:", err);
//     }
//     return;
//   }

//   const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   // Generate random date and time within the past year
//   const daysAgo = randomInt(0, 365);
//   const randomHours = randomInt(0, 23);
//   const randomMinutes = randomInt(0, 59);
//   const randomSeconds = randomInt(0, 59);

//   const DATE = moment()
//     .subtract(daysAgo, 'days')
//     .set({
//       hour: randomHours,
//       minute: randomMinutes,
//       second: randomSeconds,
//     })
//     .format();

//   const date = { date: DATE };

//   try {
//     console.log(`Committing for date: ${DATE}`);
//     await jsonfile.writeFile(FILE_PATH, date); // Write the date to the JSON file
//     const git = simpleGit(); // Initialize git instance
//     await git.add([FILE_PATH]); // Stage the changes
//     await git.commit('Update text.txt', { '--date': DATE }); // Commit with the fixed message
//     await makeCommit(n - 1); // Await recursive call
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

// makeCommit(25);














// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const random = require('random');
// const FILE_PATH = './date.json';
// const makeCommit = n => {
//     if(n===0) return simpleGit().push();
//     const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//     const x = randomInt(0,54);
//     const y = randomInt(0,6);  

//     const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();

//     const date = {
    
//         date : DATE
//     }
    
//     console.log(DATE);
    
//     jsonfile.writeFile(FILE_PATH, date, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},makeCommit.bind(this, --n));
    
//     });

// }


// makeCommit(10)

// // const jsonfile = require('jsonfile');
// // const moment = require('moment');
// // const simpleGit = require('simple-git');
// // const FILE_PATH = './data.json';

// // const makeCommit = n => {
// //     if (n === 0) return simpleGit().push();

// //     // Helper function for random integers
// //     const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// //     // Random weeks, days, hours, minutes, and seconds
// //     const x = randomInt(0, 54); // Weeks
// //     const y = randomInt(0, 6);  // Days
// //     const hours = randomInt(0, 23); // Hours
// //     const minutes = randomInt(0, 59); // Minutes
// //     const seconds = randomInt(0, 59); // Seconds

// //     // Generate random date and time
// //     const DATE = moment()
// //         .subtract(1, 'y')
// //         .add(1, 'd')
// //         .add(x, 'w')
// //         .add(y, 'd')
// //         .set({ hour: hours, minute: minutes, second: seconds }) // Set random time
// //         .format();

// //     // Prepare data for the JSON file
// //     const date = {
// //         date: DATE,
// //     };

// //     console.log(DATE);

// //     // Write to file and commit with the random date
// //     jsonfile.writeFile(FILE_PATH, date, () => {
// //         simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
// //     });
// // };

// // makeCommit(50);
