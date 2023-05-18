function spinWords(string) {
  function flipSpecificWordsBackwards(sentence, condition) {
    const words = sentence.split(" ");
    const flippedWords = words.map(word => {
      if (condition(word)) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    });
    const flippedSentence = flippedWords.join(" ");
    
    return flippedSentence;
  }
  const sentence = string;
  const flippedSentence = flipSpecificWordsBackwards(sentence, word => word.length >= 5);
  return flippedSentence
}