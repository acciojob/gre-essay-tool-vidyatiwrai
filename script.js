//your code here
function countWords() {
  const text = document.getElementById("evaluatedText").value;
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  document.getElementById("wordCount").textContent = words;
}