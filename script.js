
import {PALAVRAS_RUINS} from "./palavrasruins";

const botaomostrapalavras = document.querySelector ('#botaopalavrachave')

botaomostrapalavras.addEventListener ('click' , mostrapalavrachave);

function mostraPalavraschave () {
     const texto = document.querySelector ('entrada-de-texto').Value;
     const camporesultado = document.querySelector('#resultado-palavrachave')
     const palavrachave = processatexto(texto);

    camporesultado.textContent = mostraPalavraschave.join(",");
}

function processaTexto(texto) {
     let palavras = texto.split(/\P{L}+/u);

for (let i in palavras) {
    palavras [i] = palavras[i].toLowerCase();
}

   palavras = tirapalavrasruins(palavras);

      const frequencias = contafrequencias(palavras);
     let ordenadas = Object.keys(frequencias).sort(ordenapalavra);              {

        function ordenapalavra(p1, p2){
            return frequencias[p2]-frequencias[p1]
        }

    return ordenadas.slice(0, 10);
    }

  function contafrequencias(palavras) {
    let frequencias = {};
    for (let i of palavras){
        frequencias [i] = 0;
        for (let j of palavras){
             if (i == j){
               frequencias[i]++;
             }
        }
    }
 return frequencias;
}
}
   function tirapalavrasruins(palavras) {
    const palavrasboas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2)  {
            palavrasboas.push(palavra);
        }  
        }
     return palavrasboas;
    }
