// problem statement

// 1. add(sentence) => add a sentence to your local store (say an array/list of String)
// 2. search(word, K) => gets the top K Strings with most number of occurrences of the given word 


// If no results, return empty array.
// Characters allowed: ["a-z", "A-Z", "0-9", ".", ",", "?", "!"]
// String comparison should be case-insensitive


function searchWords() {
    const sentences = [];
    const wordCount = new Map();
  
    function add(sentence) {
      sentences.push(sentence);
      const words = sentence.toLowerCase().split(/\s+/);
      words.forEach(word => {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
      });
    }
  
    function search(word, K) {
      word = word.toLowerCase();
      const sentencesWithWord = sentences.filter(sentence =>
        sentence.toLowerCase().includes(word)
      );
      return sentencesWithWord
      .sort((a, b) => {
        // Count how many times the specified 'word' appears in string 'a'.
        const countInA = (a.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length;
      
        // Count how many times the specified 'word' appears in string 'b'.
        const countInB = (b.match(new RegExp(`\\b${word}\\b`, 'gi')) || []).length;
      
        // Compare the counts to determine the sorting order.
        return countInB - countInA;
      })
        .slice(0, K);
    }
  
    return {
      add,
      search,
    };
  }
  const searchEngine = searchWords();

  searchEngine.add("Hello World! How is the world today?");
  searchEngine.add("This is great");
  searchEngine.add("The vast majority of the countries, including all of the great powers, fought as part of two opposing military alliances: the Allies and the Axis");
  

  const result1 = searchEngine.search("world", 2);
  console.log(result1);
  // Output: ["Hello World! How is the world today?"]
  
  
  searchEngine.add("There have been two world wars so far. World needs peace! World doesn't need another war.");
  

  const result2 = searchEngine.search("world", 2);
  console.log(result2);
// Output: ["There have been two world wars so far. World needs peace! World doesn't need another war.", "Hello World! How is the world today?"]
  