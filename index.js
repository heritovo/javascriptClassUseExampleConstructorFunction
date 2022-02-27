function Hero(name, side){
  this.name = name;
  this.side = side;

  this.speech = function(){
    return "<p> I'm " + this.name + "and I'm from the side of the " + this.side + "</p>";

  }
}

let ianSolo = new Hero("Ian Solo", "Rebels");
let lukeSkyWalker = new Hero("Luke Skywalker", "Rebels");
let darkVador = new Hero("Dark Vador", "Empire");

function makeHerosSpeak(){
  document.body.innerHTML += ianSolo.speech();
  document.body.innerHTML += lukeSkyWalker.speech();
  document.body.innerHTML += darkVador.speech();

}
