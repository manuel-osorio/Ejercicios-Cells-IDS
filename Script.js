
// tabla personas 
var personaArr = [{ "personaID": 123, "name": "jhon", "City": "Malbourne", "phone": "123456764" },
                { "personaID": 124, "name": "juan", "City": "", "phone": "123456764" },
                { "personaID": 125, "name": "Pablo", "City": "Guadalajara", "phone": "123456764" },
                { "personaID": 126, "name": "Daniel", "City": "CDMX", "phone": "123456764" }];


function contenidoTablaPersona() {
    var contenedor = document.getElementById('containerTable');
    var tabla = "";
    for (let i = 0; i < personaArr.length; i++) {
        tabla += '<tr><td>' + personaArr[i].personaID + "<td>" + personaArr[i].name + '<td>' + personaArr[i].City + '<td>' + personaArr[i].phone;
        contenedor.innerHTML = tabla;
    }
}
contenidoTablaPersona();
//
var anObject = {
    foo:'bar',
    length:'interesting',
    '0': 'Zero!',
    '1':'one'
}
var anArray = ['Azero.','one.']
console.log(anArray[0],anObject[0]);
console.log(anArray[1],anObject[1]);
console.log(anArray.length, anObject.length);
console.log(anArray.foo,anObject.foo);

console.log(typeof anArray == 'object', typeof anObject == 'object');
console.log(anArray instanceof Object, anObject instanceof Object)
console.log(anArray instanceof Array,anObject instanceof Array);
console.log(Array.isArray(anArray), Array.isArray(anObject));



// 
var Obj={
    a:"Hola",
    b:"this is",
    c:"Javascript"
};
let valor =  Object.values(Obj)
console.log(valor);

//
mutiplicacion(50)
function mutiplicacion(num) {
    
    for(let i = 0; i<num;i++){
       console.log(i*2);
    }
}

//

let zero = 0;
function multiply(x){return x*2}
function add(a=1+zero,b=a,c=b+a,d=multiply(c)) {
    console.log((a+b+c),d)
}
add(1)
add(3)
add(2,7)
add(1,2,5)
add(1,2,5,10)

//
class myClass{
    constructor(){
        this.name_ =[];
    }
    set name(value){
        this.name_.push(value);
    }
    get name(){
        return this.name_[this.name_.length-1];
    }
}
const myClassInstante = new myClass();
myClassInstante.name = 'joe';
myClassInstante.name = 'Bob';
myClassInstante.name = 'Manuel';

console.log(myClassInstante.name);// segundo valor 
console.log(myClassInstante.name_)//Me concatena las dos nombre



//

const classIntance = new class{
    get prop(){
        return 5;
    }
}
classIntance.prop = 10;
console.log(classIntance.prop) //retornar el 5


class Queue{
    constructor(){
        const list =[];
        this.enqueue =function (type) {
            list.push(type)
             return type
        };
        this.dequeue = function (type) {
            return list.shift();
            
        }
    }
}

var q = new Queue;
q.enqueue(9);//primer posicion en el arregloobject 
q.enqueue(8);//segunda posicion en el arrgelo del objecto
q.enqueue(7);//tecrcer posicion en el arreglo del objecto
console.log(q.dequeue())//se eleimina la primer posion en el arreglo del objecto al entrar en el metodo shift
console.log(q.dequeue())//Se elimina el primer elemento con la pocision 0 que estaba en la poisicion 1
console.log(q.dequeue())//Se elimina el ultimo elemento con la posicion 0 
console.log(q)//imprime los metodos del objecto bvacios
console.log(Object.keys(q)); //imprime los metodos unitarios con el Keys



//
class Person {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido 
    }
    
}
let persona = new Person('jhon',' Doe');
console.log(persona.nombre, persona.apellido);
persona.nombre = 'manuel';
persona.apellido = 'Osorio';
console.log(persona.nombre, persona.apellido)



//

       
const button = document.createElement('button');
button.type =  'buttton';
button.innerText = "Elminar";
document.body.appendChild(button);
console.log("hola")
/
/* button.addEventListener('click',function(e){
    const div1= document.getElementById('post-102');
    const div2 = document.getElementById('post-103');
    div1.remove();
    div2.remove();
})*/

button.addEventListener('click', function(e){
   alert('Desea Eliminar [data-deletepost]',miquerySelectorAll())
})
function miquerySelectorAll(){
    var deleteBtm =  document.querySelectorAll("[data-deletepost]");
    for(let i=0;i<deleteBtm.length;i++){
       deleteBtm[i].style.display="none";

    }
}







//Reloj


function generarActural() {
    let hrexacta = new Date();
    let hr = hrexacta.getHours().toString().length<2? '0'+ hrexacta.getHours():hrexacta.getHours();
    let min = hrexacta.getMinutes().toString().length<2? '0'+hrexacta.getMinutes() : hrexacta.getMinutes();
    let seg =hrexacta.getSeconds().toString().length<2? '0'+hrexacta.getSeconds() : hrexacta.getSeconds();
    let concatenacionHr = hr  +'<p>h</p>:'+ min+ '<p>min</p>:'+ seg+'<p>seg</p>';
    document.getElementById('HrActual').innerHTML = concatenacionHr
}
setInterval(() => {
    generarActural()
}, 1000);