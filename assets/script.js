const nombre="Adris";
let edad=25;

const perro={
    raza:"Gran danes",
    noPatas: 4,
    color:"cafe con manchas"
}

perro.color="cafe con manchas negras"

console.log("hola mundo, nombre")


var app=document.getElementById(Titulo);
console.log(titulo);

let typewriter = new typewriter(app{
    loop:true
})

typewriter.typeString('Hello world')
.pauseFor(2500)
.deleteAll()
.typeString('String can be removed')
.pauseFor(2500)
.deleteChars(7)
.typeString('<strong>altered!</strong>')
.pauseFor(2500)
.start();