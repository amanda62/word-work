let wordbank = ["dog", "cat", "horse"];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getWordbank() {
  await delay(200);
  return [...wordbank];
}

async function setWordbank(word) {
  await delay(100);
  wordbank = [...wordbank, word];
  return [...wordbank];
}

export default {
  getWordbank,
  setWordbank
};
