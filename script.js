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
        

        let Random = setInterval(function(){
            counter++;  
            let valorTemp1 = Math.floor(Math.random() * 10); 
            let valorTemp2 = Math.floor(Math.random() * 10); 
            let valorTemp3 = Math.floor(Math.random() * 10);
            
            esquerda.src = imgArray[valorTemp1]; 
            centro.src = imgArray[valorTemp2]; 
            direita.src = imgArray[valorTemp3];

            result.innerText = "PREPARAR PARA DECOLAR! LIGANDO OS MOTORES!"

            if (counter > 20){
                let valorFinal1 = Math.floor(Math.random() * 10); 
                let valorFinal2 = Math.floor(Math.random() * 10); 
                let valorFinal3 = Math.floor(Math.random() * 10);

                esquerda.src = imgArray[valorFinal1]; 
                centro.src = imgArray[valorFinal2]; 
                direita.src = imgArray[valorFinal3];

                if((valorFinal1 === valorFinal2) && (valorFinal1 === valorFinal3)){
                    result.innerText="O LANÇAMENTO FOI UM SUCESSO!!!";
                }
                else if((valorFinal1 === valorFinal2) || (valorFinal1 === valorFinal3) || (valorFinal2 === valorFinal3)){
                    result.innerText="FOI POR POUCO! CONTINUE TENTANDO!";
                }
                else{
                    result.innerText="QUE PENA, O LANÇAMENTO NÃO DEU CERTO :(";
                };   
                                
                counter = 0; 
                clearInterval(Random);
            }
        },100)
        
}