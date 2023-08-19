let input;
let button;
let baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let apiKey = "tBtC7uAwz54VpheQMTvgS0rFGF8vaXpR";

function setup(){
    noCanvas();

    // Crear el input y el botón
    input = createInput('');
    input.attribute('placeholder', 'Introduce un término de búsqueda...');
    button = createButton('Buscar');
    button.mousePressed(searchArticles); // Cuando se presione el botón, llama a la función searchArticles

    //loadJSON(baseUrl + "?q=pets&api-key=" + apiKey, gotData); // Carga inicial con "pets" como consulta
}

function searchArticles(){
    let searchTerm = input.value(); // Recuperar el valor del input
    let searchUrl = baseUrl + "?q=" + searchTerm + "&api-key=" + apiKey;
    loadJSON(searchUrl, gotData); // Hacer la consulta con el término de búsqueda
}

function gotData(data){
    // Eliminar resultados anteriores
    selectAll('h1').forEach(element => element.remove());
    selectAll('p').forEach(element => element.remove());

    let articles = data.response.docs;
    for (let i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].headline.main)
        createP(articles[i].snippet);
    }
    print(data.response.docs[1].headline.main);
}
