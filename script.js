function generate()
{
  num = Math.floor(Math.random() * 10) + 1;
  if (num == 1)
  {
    window.open("1.html")
  }
  else
  {
    window.alert("Error")
  }
}
console.log("Website loaded")
