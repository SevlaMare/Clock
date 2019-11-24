function myFunction() {
  var date = new Date()
  var hours = date.getHours()
  var min = date.getMinutes()
  var img = document.querySelector("#photo1")
  var selector1 = document.querySelector("#welcome")

  document.querySelector("#cartao").innerHTML = `Now is ${hours}h ${min}min`;
  document.title = `Time ${hours}:${min}`

  if (hours < 12) {
    selector1.innerHTML = "Good Morning!"
    img.src = "morning.png"
    document.body.style.background = "#f8da51"
  } else if (hours < 18){
    selector1.innerHTML = "Good Afternoon!"
    img.src = "afternoon.png"
    document.body.style.background = "#eeaf49"
  } else {
    selector1.innerHTML = "Good Night!"
    img.src = "night.png"
    document.body.style.background = "#20162e"
  };
};