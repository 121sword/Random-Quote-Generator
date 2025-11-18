function generate()
{
  let max = 2;
  let quote;
  let quoteNum;
  quoteNum = Math.floor(Math.random() * max) + 1;
  console.log("Quote number:"+quoteNum);
  switch (quoteNum)
  {
    case 1:
      quote = "Quote 1";
      break;
    case 2:
      quote = "Quote 2"
      break;
    default:
      quote = "An error has occurred."
      break;
  }
  document.getElementById("text").innerHTML = fact;
}
console.log("Website loaded")
