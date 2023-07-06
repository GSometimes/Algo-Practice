// Directions

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

function mostWordsFound(sentences) {
  // define variable for counter
  let maxWords = 0;

  // iterate over sentences
  for (const sentence of sentences) {
    // split sentence into words
    const words = sentence.split(' ');
    // define variable for word count
    const wordCount = words.length;

    // if word count is greater than max words
    // reassign max words to word count
    if (wordCount > maxWords) {
      maxWords = wordCount;
    }
  }

  // return counter
  return maxWords;
}

// time complexity: O(n)
// space complexity: O(1)

// rewrite using reduce
function mostWordsFound(sentences) {
  // return the max number of words in a sentence
  return sentences.reduce((maxWords, sentence) => {
    // split sentence into words
    const words = sentence.split(' ');
    // define variable for word count
    const wordCount = words.length;

    // if word count is greater than max words
    // reassign max words to word count
    if (wordCount > maxWords) {
      maxWords = wordCount;
    }

    // return max words
    return maxWords;
  }, 0);
}

// time complexity: O(n)
// space complexity: O(1)

console.log(
  mostWordsFound([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much',
  ])
);
console.log(
  mostWordsFound(['please wait', 'continue to fight', 'continue to win'])
);
