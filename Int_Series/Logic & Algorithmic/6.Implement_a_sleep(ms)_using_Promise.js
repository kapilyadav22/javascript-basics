// Implement sleep(ms) using Promise

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedClick() {
  console.log('Start');
  await sleep(1500);
  console.log('After 1.5s');
};

