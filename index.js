document.getElementById("searchBtn").addEventListener("click", () => {
  let removeContent = $(".container");
  removeContent.remove();
  let searchTerm = document.getElementById("search").value;
  $.getJSON(
    `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`,
    function(data) {
      let x = 0;
      for (let i = 0; i < data.length; i++) {
        let beerHTML = `
            <div class="container">
                <div class="imageContainer">
                    <img class="icon" src='${data[x].image_url}'/>
                </div>
                <h6 class="name">${data[x].name}</h6>
                <p class="description">${data[x].description}</p>
                <p class="continue">...</p>
        
                <p class="level">Alcohol Level: ${data[x].abv}%</p>
            </div> `;

        x++;
        $("#beerDisplay").append(beerHTML);
      }
    }
  );
});
