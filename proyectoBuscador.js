let buscador = document.querySelector(".formBuscador")
console.log(buscador)
buscador.addEventListener('submit', function(event){
    event.preventDefault();
    let resultado = document.querySelector("#juego")
    console.log(resultado["value"])
    let contenedor = document.querySelector(".contenedorOfertas")
    contenedor.innerHTML = ""        
    fetch(`https://www.cheapshark.com/api/1.0/deals?title=${resultado["value"]}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        console.log(data.length)
        
        if (data.length == 0){
            let contenedor = document.querySelector(".contenedorOfertas")
            contenedor.innerHTML = "<h2>La búsqueda no arrojó resultados<h2>"
        } else {
        for(i in data){
            let nuevoDiv = document.createElement("DIV")
            let contenedor = document.querySelector(".contenedorOfertas");
            console.log(data[i])
            nuevoDiv.classList = "contenedorJuego";
            contenedor.appendChild(nuevoDiv);
            nuevoDiv.innerHTML = `<span class="imgJuego"><img src="${data[i]["thumb"]}"         width="200px"></img></span>
                                  <h2>${data[i]["title"]}</h2>
                                  <h3>Rating Steam: ${data[i]["steamRatingText"]}</h3>
                                  <div class="precio"><h2>$${data[i]["salePrice"]}</h2><p>$${data[i]["normalPrice"]}</p></div>
                                  <a href="https://www.cheapshark.com/redirect?dealID=${data[i]["dealID"]}" target="_blank">Ir a la Tienda</a>`
            }                      
            resultado.setAttribute("placeholder",resultado.value);
            resultado.value = "";
                           
        }
    })
})
