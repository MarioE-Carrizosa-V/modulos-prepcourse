/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let segundoArray = []
   for (let key in objeto) {
       if (Object.hasOwnProperty.call(objeto, key)) {
           let nuevoArray = []
           nuevoArray.push(key);
           nuevoArray.push(objeto[key])
           segundoArray.push(nuevoArray)
       }
   }
   return segundoArray
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let array = string.split('').sort()
   let letras = {}
   for (let i = 0; i < array.length; i++) {
       let array1 = array[i]
       let contador = 0
       for (let k = string.length - 1; k >= 0; k--) {
           let array2 = string[k]
           if (array1 === array2)
           contador += 1;
           if (array1 === array2)
           letras[array1] = contador;
       }
   }
   return letras
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]:soyHENRY ---> HENRYsoy
   // Tu código:
   let newString = []
   for (let k = 0; k < string.length; k++) {
       if (string[k].toUpperCase() !== string[k])
       newString.push(string[k])
   }
   for (let i = string.length - 1; i >= 0; i--) {
           if (string[i] === string[i].toUpperCase())
               newString.unshift(string[i])


   }
   return newString.join('')
}


function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    newFrase = frase.split(' ')
    fraseFinal = []
    let newPalabra = ''
    for (let i = 0; i < newFrase.length; i++) {
         let palabra = ' ' + newFrase[i]
         if (i === newFrase.length - 1)
         palabra = newFrase[i]
         for (let k = palabra.length - 1; k >= 0; k--) { 
            let palabraAlRevez = palabra[k]
            newPalabra += palabraAlRevez
             
         }
    }
    return newPalabra
 }


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let palabra = numero.toString()
   let nuevoNum = []
   for (let i = palabra.length - 1; i >= 0; i--) {
           nuevoNum.push(palabra[i])
   }
   let number = nuevoNum.join('')
   if (number == numero) return 'Es capicua'; else{
   return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = []
   for (let i = 0; i < string.length; i++) {
       if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c')
      newString.push(string[i])
   }
   return newString.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newArray = []
   for (let k = 0; k <= 100; k++) {
       let noLetras = k
       for (let j = 0; j < arrayOfStrings.length; j++) {
           let palabra = arrayOfStrings[j]
           if (palabra.length === noLetras)
           newArray.push(palabra)
       }
   }
   return newArray
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = []
   for (let i = 0; i < array1.length; i++) {
       let elemento = array1[i]
       for (let j = 0; j < array2.length; j++) {
         let element = array2[j];
         if (element === elemento)
         newArray.push(elemento)
       }
   }
   return newArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
