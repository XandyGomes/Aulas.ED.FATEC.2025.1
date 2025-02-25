function buscaSequencial(vetor, valorBusca){
    //percurso do vetor com for tradicional
    for(let i=0; i < vetor.length; i++ ){
        if(vetor[i] === valorBusca) return i //encontrou valorBusca
    }
    return -1 // valorBusca não existe no vetor
}

// const frutas = [ 'laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão' ]

// console.log("Posição de uva: ", buscaSequencial(frutas, 'uva'))
// console.log("Posição de ameixa: ", buscaSequencial(frutas, 'ameixa'))


import {nomes} from "./data/vetor-nomes.mjs"

console.log("Posição de ALEXANDRE:", buscaSequencial(nomes, "ALEXANDRE"))
