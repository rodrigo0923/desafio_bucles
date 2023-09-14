
function alwaysHungry(arr) {
    var start = Date.now();
 
    let hungry = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == 'comida'){
            hungry = hungry + 1;
        }
    }   
    if(hungry > 0){
        for(let i=0 ; i<hungry ; i++){
            console.log("Delicioso");
        }
    }
    else 
    console.log("Tengo Hambre");
    var end = Date.now();
 
    console.log("tiempo en milisegundos:",end - start);
}
let array = alwaysHungry([3.14, "comida", "pastel", true, "comida"]);

// esto debería mostrar "delicioso, "delicioso"
//let array = alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre" 
//code 2

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length ; i++){
        filteredArr = arr.filter((i) => i > cutoff); // filtramos
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//code 3

function betterThanAverage(arr) {
    var sum = 0;
    var prom = 0;
    for(let i = 0 ; i<arr.length ; i++){
        sum = sum + arr[i];
    }
    prom = sum/arr.length;
    console.log("suma",sum);
    console.log("promedio:",prom);
    var count = 0
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>prom){
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

//code 4

function reverse(arr) {
    let largoarray = arr.length;
    for(let i=0; i < largoarray/2 ; i++){
        let temp = arr[i];
        let indiceContrario = largoarray - i - 1;
        arr[i] = arr[indiceContrario];
        //lo que estaba en la posicion [0] = a lo almacena en la posicion [4] = e
        arr[indiceContrario] = temp;      
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//code 5

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
                          //[n-2,n-1]
    var fibArr = [0, 1]; // [0,1,1,x]
    //i=2 comienza fuera del array en la posicion 2
    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i -1] + fibArr[i - 2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



