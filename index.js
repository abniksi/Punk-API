$.getJSON("https://api.punkapi.com/v2/beers", function(data) {
  let userInput = document.getElementById("search").value;
  console.log(userInput);
  const beerSearch = "https://api.punkapi.com/v2/beers?beer_name=" + userInput;
  console.log(beerSearch);

  let x = 0;
  for (let i = 0; i < data.length; i++) {
    let beerHTML = `
    <div class="container">
        <div class="imageContainer">
            <img class="icon" src = "${data[x].image_url}"/>
        </div>
        <h6 class="name">${data[x].name}</h6>
        <p class="description">${data[x].description}</p>
        <p class="continue">...</p>

        <p class="level">Alcohol Level: ${data[x].abv}%</p>
    </div> `;

    $("#beerDisplay").append(beerHTML);

    x++;
  }
});
