const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const q1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q1/7: What do you like people to call you?\n: ', (answer) => {
      console.log(`I see, you like to be called ${answer}!`);
      resolve(answer);
    });
  });
};
const q2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q2/7: What do you like to do with your time?\n: ', (answer) => {
      console.log(`Interesting, ${answer} huh?`);
      resolve(answer);
    });
  });
};
const q3 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Q3/7: What, if any, music or sounds do you listen to while ${profile.hobby}?\n: `, (answer) => {
      console.log(`Ooh, so you like to listen to ${answer}!`);
      resolve(answer);
    });
  });
};
const q4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q4/7: What is the one meal during the day that you look forward to the most?\n: ', (answer) => {
      console.log(`Ah yes, ${answer} is a wonderful meal!`);
      resolve(answer);
    });
  });
};
const q5 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q5/7: What is your favourite food to eat during your favourite meal?\n: ', (answer) => {
      console.log(`Of course, who doesn't love to eat ${answer}.`);
      resolve(answer);
    });
  });
};
const q6 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q6/7: If you had to pick a sport, any sport, what would you pick to watch or play?\n: ', (answer) => {
      console.log(`A good game of ${answer} is just the best!`);
      resolve(answer);
    });
  });
};
const q7 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Q7/7: If you had to describe yourself with a superpower, what would it be?\n: ', (answer) => {
      console.log(`Lookout Superman! ${profile.nickname}'s coming for you with their ${answer}!`);
      resolve(answer);
    });
  });
};

const main = async () => {
  try {
    profile.nickname = await q1();
    profile.hobby = await q2();
    profile.music = await q3();
    profile.favMeal = await q4();
    profile.favFood = await q5();
    profile.sport = await q6();
    profile.superpower = await q7();
  } catch (err) {
    console.log(err);
  }
};

main().then(() => {
  rl.close();
  console.log(`${profile.nickname} loves listening to ${profile.music} while ${profile.hobby}, munching down ${profile.favFood} for ${profile.favMeal}, loves ${profile.sport} more than any other sport, and their self-proclaimed superpower is: ${profile.superpower}.`);
}).catch((error) => {
  console.log(error);
});