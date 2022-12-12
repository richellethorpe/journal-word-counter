import Entry from './entry.js';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



function handleSubmit(event){
  event.preventDefault();
  console.log("running");
  document.getElementById("response").removeAttribute("class");
  const passage = document.getElementById("journal-passage").value;
  let newEntry = new Entry();
  
  newEntry.findWordCount(passage);
  newEntry.numberOfVowels(passage);
  newEntry.numberOfConsonants(passage);
  const teaserOutput = newEntry.teaser(passage);
  console.log(newEntry);
  
  document.getElementById("numberOfWords").innerText = newEntry.wordCount;
  document.getElementById("numberOfVowels").innerText = newEntry.vowelCount;
  document.getElementById("numberOfConsonants").innerText = newEntry.consonantCount;
  document.getElementById("teaser").innerText =teaserOutput;

  


}

window.addEventListener("load", function(){
  console.log('running window');
  document.getElementById("journal-entry").addEventListener("submit", handleSubmit);
})

