
export default function Entry(text){
  this.text = text;
  this.wordCount=0;
  this.vowelCount=0;
  this.consonantCount=0;
}
// element.toLowerCase.includes(/[^a-z]/)
//EDGE CASES: if element is a number
//if it has an extra blank space value

Entry.prototype.findWordCount = function(passage) {
  let arrayPassage = passage.split(" ");
  arrayPassage.forEach(element => {
    if (element === ""){
      this.wordCount += 0;
    }else if (!Number(element)){
      this.wordCount ++;
    }
     return this.wordCount;
  })
};

Entry.prototype.numberOfVowels = function(passage) {
const vowels = ["a", "e", "i", "o", "u"];
let arrayPassage = passage.split("");
arrayPassage.forEach(element => {
  vowels.forEach(vowel => {
    if (element === vowel) {
      this.vowelCount ++;
    } 
  })
  })
}

Entry.prototype.numberOfConsonants = function(passage) {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let arrayPassage = passage.split("");
  arrayPassage.forEach(element => {
    consonants.forEach(consonant => {
      if (element === consonant) {
        this.consonantCount ++;
      }
    })
  })
}

//return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.

Entry.prototype.teaser = function(passage){
  let arrayPassage = passage.split(" ");
  if (arrayPassage.length >= 8){
    return arrayPassage.slice(0,8);
  }else {
    return arrayPassage[0];
  }
}
