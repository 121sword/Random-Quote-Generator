function generateQuote()
{
  let max = 2;
  let quote;
  let quoteNum;
  quoteNum = Math.floor(Math.random() * max) + 1;
  console.log("Quote number:"+quoteNum);
  switch (quoteNum)
  {
    case 1:
      quote = "Life is about making an impact, not making an income. -Kevin Kruse";
      break;
    case 2:
      quote = "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 4:
      quote = "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost"
      break;
    case 5:
      quote = "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"
      break;
    case 6:
      quote = "You miss 100% of the shots you don’t take. –Wayne Gretzky"
      break;
    case 7:
      quote = "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. –Michael Jordan"
      break;
    /*case 3:
      quote = ""
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
     case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;
    case 3:
      quote = "Strive not to be a success, but rather to be of value. –Albert Einstein"
      break;*/
    default:
      quote = "An error has occurred."
      break;
  }
  document.getElementById("text").innerHTML = quote;
}
console.log("Website loaded")
