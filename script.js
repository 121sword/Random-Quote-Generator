window.addEventListener("load", function())
{
  document.getElementById("button").addEventListener("click", generateQuote)
}
function generateQuote()
{
  let max = 13;
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
    case 8:
      quote = "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart"
      break;
    case 9:
      quote = "Every strike brings me closer to the next home run. –Babe Ruth"
      break;
    case 10:
      quote = "Definiteness of purpose is the starting point of all achievement. –W. Clement Stone"
      break;
    case 11:
      quote = "Life isn't about getting and having, it's about giving and being. –Kevin Kruse"
      break;
    case 12:
      quote = "Life is what happens to you while you’re busy making other plans. –John Lennon"
      break;
    case 13:
      quote = "We become what we think about. –Earl Nightingale"
      break;
    /*
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
    */
    default:
      quote = "An error has occurred."
      break;
  }
  document.getElementById("text").innerHTML = quote;
}
console.log("Website loaded")
