const API_KEY = "609ee949db624096b2b10bd0c3ba748b";

let config = {
    method: "GET"
}

let boardNoticias = document.querySelector('#boardNoticias')
let btnCarregar = document.querySelector ('#btnCarregar')


function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach((noticia) => {
        let novaNoticia =
            `<div class="card-deck">
  <div class="card">
      <div class="card-body">
      <img src="${noticia.urlToImage}" class="imgNoticia">
          <h5 class="card-title">${noticia.title}</h5>
          <div class="card-text">${noticia.description}</div>
      </div>
      <div class="card-footer">
      </div>
  </div>
    </div>`
        boardNoticias.insertAdjacentHTML('beforeend', novaNoticia);
    })
}   
btnCarregar.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            console.log(json.articles[0])
            mostrarNaTela(json.articles)
        })
}