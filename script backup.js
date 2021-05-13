//criando array com paths das imagens
let diretorio = "./imgs/";
let imgArray = [];

for(let i = 0 ; i < 10; i++) {
    imgArray[i] = diretorio + i + ".png";
}

console.log(imgArray);

//pegando os elementos
const board = document.getElementById('board');
const result = document.getElementById('result');
const esquerda = document.getElementById('esquerda');
const centro = document.getElementById('centro');
const direita = document.getElementById('direita');
const button = document.getElementById('button');


//colocando Listener para click
button.addEventListener('click', roll);

let counter = 0;

//função de rolagem
function roll(){ 
        

        // let Random = setInterval(function(){
        //     counter++;  
        //     let valortemp1 = Math.floor(Math.random() * 10); 
        //     let valortemp2 = Math.floor(Math.random() * 10); 
        //     let valortemp3 = Math.floor(Math.random() * 10);
            
        //     esquerda.src = imgArray[valortemp1]; 
        //     centro.src = imgArray[valortemp2]; 
        //     direita.src = imgArray[valortemp3];

        //     if (counter > 7){
        //         counter = 0; 
        //         clearInterval(Random);
        //     }
        // },100)

        let valor1 = Math.floor(Math.random() * 10); 
        let valor2 = Math.floor(Math.random() * 10); 
        let valor3 = Math.floor(Math.random() * 10);
        
        esquerda.src = imgArray[valor1]; 
        centro.src = imgArray[valor2]; 
        direita.src = imgArray[valor3];

        console.log(valor1);
        console.log(valor2);
        console.log(valor3);
        if((valor1 === valor2) && (valor1 === valor3)){
            result.innerText="O LANÇAMENTO FOI UM SUCESSO!!!";
        }
        else if((valor1 === valor2) || (valor1 === valor3) || (valor2 === valor3)){
            result.innerText="FOI POR POUCO! CONTINUE TENTANDO!";
        }
        else{
            result.innerText="QUE PENA, O LANÇAMENTO NÃO DEU CERTO";
        };
}