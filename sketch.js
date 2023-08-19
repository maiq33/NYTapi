let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=pets&api-key=tBtC7uAwz54VpheQMTvgS0rFGF8vaXpR"

function setup(){
    noCanvas();
    loadJSON(url, gotData);

}

function gotData(data){

    let articles = data.response.docs;
    for (let i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].headline.main)
        createP(articles[i].snippet);
        }
    print(data.response.docs[1].headline.main);
    
}