window.addEventListener("load", function()
{
  document.getElementById("button").addEventListener("click", generateQuote)
  console.log("Page loaded")
})
function generateQuote()
{
  let max = 100;
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
        case 14:
      quote = "An unexamined life is not worth living. –Socrates";
      break;
    case 15:
      quote = "Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs";
      break;
    case 16:
      quote = "Winning isn’t everything, but wanting to win is. –Vince Lombardi";
      break;
    case 17:
      quote = "I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey";
      break;
    case 18:
      quote = "Every child is an artist. The problem is how to remain an artist once he grows up. –Pablo Picasso";
      break;
    case 19:
      quote = "You can never cross the ocean until you have the courage to lose sight of the shore. –Christopher Columbus";
      break;
    case 20:
      quote = "Either you run the day, or the day runs you. –Jim Rohn";
      break;
    case 21:
      quote = "Whether you think you can or you think you can’t, you’re right. –Henry Ford";
      break;
    case 22:
      quote = "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb";
      break;
    case 23:
      quote = "The mind is everything. What you think you become. –Buddha";
      break;
    case 24:
      quote = "The best revenge is massive success. –Frank Sinatra";
      break;
    case 25:
      quote = "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily. –Zig Ziglar";
      break;
    case 26:
      quote = "Life shrinks or expands in proportion to one’s courage. –Anaïs Nin";
      break;
    case 27:
      quote = "If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced. –Vincent Van Gogh";
      break;
    case 28:
      quote = "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. –Aristotle";
      break;
    case 29:
      quote = "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. –Jesus";
      break;
    case 30:
      quote = "The only person you are destined to become is the person you decide to be. –Ralph Waldo Emerson";
      break;
    case 31:
      quote = "Go confidently in the direction of your dreams. Live the life you have imagined. –Henry David Thoreau";
      break;
    case 32:
      quote = "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left, and could say, I used everything you gave me. –Erma Bombeck";
      break;
    case 33:
      quote = "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. –Booker T. Washington";
      break;
    case 34:
      quote = "Certain things catch your eye, but pursue only those that capture the heart. –Ancient Indian Proverb";
      break;
    case 35:
      quote = "Believe you can and you’re halfway there. –Theodore Roosevelt";
      break;
    case 36:
      quote = "Everything you’ve ever wanted is on the other side of fear. –George Addair";
      break;
    case 37:
      quote = "Teach thy tongue to say, ‘I do not know,’ and thou shalt progress. –Maimonides";
      break;
    case 38:
      quote = "Fall seven times and stand up eight. –Japanese Proverb";
      break;
    case 39:
      quote = "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. –Helen Keller";
      break;
    case 40:
      quote = "Everything has beauty, but not everyone can see. –Confucius";
      break;
    case 41:
      quote = "How wonderful it is that nobody need wait a single moment before starting to improve the world. –Anne Frank";
      break;
    case 42:
      quote = "When I let go of what I am, I become what I might be. –Lao Tzu";
      break;
    case 43:
      quote = "Happiness is not something readymade. It comes from your own actions. –Dalai Lama";
      break;
    case 44:
      quote = "If you want to lift yourself up, lift up someone else. –Booker T. Washington";
      break;
    case 45:
      quote = "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. –Jamie Paolinetti";
      break;
    case 46:
      quote = "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. –Sheryl Sandberg";
      break;
    case 47:
      quote = "If the wind will not serve, take to the oars. –Latin Proverb";
      break;
    case 48:
      quote = "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground. –Unknown";
      break;
    case 49:
      quote = "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. –Marie Curie";
      break;
    case 50:
      quote = "Too many of us are not living our dreams because we are living our fears. –Les Brown";
      break;
    case 51:
      quote = "Challenges are what make life interesting and overcoming them is what makes life meaningful. –Joshua J. Marine";
      break;
    case 52:
      quote = "If you want to achieve greatness stop asking for permission. –Anonymous";
      break;
    case 53:
      quote = "Things work out best for those who make the best of how things work out. –John Wooden";
      break;
    case 54:
      quote = "To live a creative life, we must lose our fear of being wrong. –Joseph Chilton Pearce";
      break;
    case 55:
      quote = "If you are not willing to risk the usual you will have to settle for the ordinary. –Jim Rohn";
      break;
    case 56:
      quote = "Trust because you are willing to accept the risk, not because it’s safe or certain. –Anonymous";
      break;
    case 57:
      quote = "All our dreams can come true if we have the courage to pursue them. –Walt Disney";
      break;
    case 58:
      quote = "Good things come to people who wait, but better things come to those who go out and get them. –Anonymous";
      break;
    case 59:
      quote = "If you do what you always did, you will get what you always got. –Anonymous";
      break;
    case 60:
      quote = "Success is walking from failure to failure with no loss of enthusiasm. –Winston Churchill";
      break;
    case 61:
      quote = "Just when the caterpillar thought the world was ending, he turned into a butterfly. –Proverb";
      break;
    case 62:
      quote = "Successful entrepreneurs are givers and not takers of positive energy. –Anonymous";
      break;
    case 63:
      quote = "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. –Vaibhav Shah";
      break;
    case 64:
      quote = "Opportunities don’t happen, you create them. –Chris Grosser";
      break;
    case 65:
      quote = "Try not to become a person of success, but rather try to become a person of value. –Albert Einstein";
      break;
    case 66:
      quote = "Great minds discuss ideas; average minds discuss events; small minds discuss people. –Eleanor Roosevelt";
      break;
    case 67:
      quote = "I have not failed. I’ve just found 10,000 ways that won’t work. –Thomas Edison";
      break;
    case 68:
      quote = "If you don’t value your time, neither will others. Stop giving away your time and talents. –Kim Garst";
      break;
    case 69:
      quote = "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. –David Brinkley";
      break;
    case 70:
      quote = "No one can make you feel inferior without your consent. –Eleanor Roosevelt";
      break;
    case 71:
      quote = "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. –Henry Ford";
      break;
    case 72:
      quote = "If you’re going through hell keep going. –Winston Churchill";
      break;
        case 73:
      quote = "What seems to us as bitter trials are often blessings in disguise. –Oscar Wilde";
      break;
    case 74:
      quote = "You become what you believe. –Oprah Winfrey";
      break;
    case 75:
      quote = "Dream big and dare to fail. –Norman Vaughan";
      break;
    case 76:
      quote = "The journey of a thousand miles begins with one step. –Lao Tzu";
      break;
    case 77:
      quote = "Do what you can, with what you have, where you are. –Theodore Roosevelt";
      break;
    case 78:
      quote = "Act as if what you do makes a difference. It does. –William James";
      break;
    case 79:
      quote = "In the middle of difficulty lies opportunity. –Albert Einstein";
      break;
    case 80:
      quote = "It always seems impossible until it’s done. –Nelson Mandela";
      break;
    case 81:
      quote = "Success is not final, failure is not fatal: it is the courage to continue that counts. –Winston Churchill";
      break;
    case 82:
      quote = "Do not wait to strike till the iron is hot; make it hot by striking. –William Butler Yeats";
      break;
    case 83:
      quote = "Everything you can imagine is real. –Pablo Picasso";
      break;
    case 84:
      quote = "The power of imagination makes us infinite. –John Muir";
      break;
    case 85:
      quote = "What you get by achieving your goals is not as important as what you become by achieving your goals. –Zig Ziglar";
      break;
    case 86:
      quote = "We are what we repeatedly do. Excellence, then, is not an act but a habit. –Will Durant";
      break;
    case 87:
      quote = "The future belongs to those who believe in the beauty of their dreams. –Eleanor Roosevelt";
      break;
    case 88:
      quote = "You must do the thing you think you cannot do. –Eleanor Roosevelt";
      break;
    case 89:
      quote = "What lies behind us and what lies before us are tiny matters compared to what lies within us. –Ralph Waldo Emerson";
      break;
    case 90:
      quote = "Courage is grace under pressure. –Ernest Hemingway";
      break;
    case 91:
      quote = "Do not let what you cannot do interfere with what you can do. –John Wooden";
      break;
    case 92:
      quote = "The only limit to our realization of tomorrow is our doubts of today. –Franklin D. Roosevelt";
      break;
    case 93:
      quote = "Start where you are. Use what you have. Do what you can. –Arthur Ashe";
      break;
    case 94:
      quote = "Perseverance is not a long race; it is many short races one after the other. –Walter Elliot";
      break;
    case 95:
      quote = "If you want to go fast, go alone. If you want to go far, go together. –African Proverb";
      break;
    case 96:
      quote = "The harder I work, the luckier I get. –Samuel Goldwyn";
      break;
    case 97:
      quote = "What we think, we become. –Buddha";
      break;
    case 98:
      quote = "Success usually comes to those who are too busy to be looking for it. –Henry David Thoreau";
      break;
    case 99:
      quote = "The secret of getting ahead is getting started. –Mark Twain";
      break;
    case 100:
      quote = "I would rather die of passion than of boredom. –Vincent Van Gogh";
      break;

    default:
      quote = "An error has occurred."
      break;
  }
  document.getElementById("text").innerHTML = quote;
}

