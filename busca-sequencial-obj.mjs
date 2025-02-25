function buscaSequencial(vetor, fnComp){
    //percurso do vetor com for tradicionnal
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i
    }
    return -1
}



function comparaNome(a){
    return a.first_name === "ALEXANDRE"
}
function comparaNomedoGrupo(obj){
    return obj.group_name === "ABRAAO"
}

import { objNomes } from "./data/vetor-obj-nomes.mjs"

console.log("Posição de ALEXANDRE:", buscaSequencial(objNomes, comparaNome))
console.log("Posição do GRUPO ABRAAO:", buscaSequencial(objNomes, comparaNomedoGrupo))