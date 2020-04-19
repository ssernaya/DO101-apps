var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Martian!\n');
});

app.get('/heroes', function (req, res) {

  var data = `{"heroes":[{
    "nombre": "Aquaman",
    "bio": "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    "img": "assets/img/aquaman.png",
    "aparicion": "1941-11-01",
    "casa": "DC"
},
{
    "nombre": "Batman",
    "bio": "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    "img": "assets/img/batman.png",
    "aparicion": "1939-05-01",
    "casa": "DC"
},
{
    "nombre": "Hulk",
    "bio": "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
    "img": "assets/img/hulk.png",
    "aparicion": "1962-05-01",
    "casa": "Marvel"
},
{
    "nombre": "Linterna Verde",
    "bio": "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
    "img": "assets/img/linterna-verde.png",
    "aparicion": "1940-06-01",
    "casa": "DC"
},
{
    "nombre": "Spider-Man",
    "bio": "Tras ser mordido por una araña radiactiva",
    "img": "assets/img/spiderman.png",
    "aparicion": "1962-08-01",
    "casa": "Marvel"
},
{
    "nombre": "Wolverine",
    "bio": "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
    "img": "assets/img/wolverine.png",
    "aparicion": "1974-11-01",
    "casa": "Marvel"
}]}`;


var jsonObj = JSON.parse(data);
  res.send(jsonObj);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

