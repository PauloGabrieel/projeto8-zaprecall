import Cards from "./Cards";
import logo from "./assets/image/logo.png";
import party from "./assets/image/party.png"
import sad from "./assets/image/sad.png"
import React from "react";

const deckReact = [{p:"Perguna 1", q: "O que é JSX?", r: "Uma extensão de linguagem do JavaScript"},
{p: "Pergunta 2", q: "O React é __ " , r: "uma biblioteca JavaScript para construção de interfaces"},
{p: "Pergunta 3", q: "Componentes devem iniciar com __ ", r: "letra maiúscula"},
{p: "Pergunta 4", q: "Podemos colocar __ dentro do JSX" , r: "expressões"},
{p: "Pergunta 5 ", q: "O ReactDOM nos ajuda __ ", r: "interagindo com a DOM para colocar componentes React na mesma"},
{p: "Pergunta 6", q: "Usamos o npm para __ " , r: "gerenciar os pacotes necessários e suas dependências"},
{p: "Pergunta 7", q: "Usamos props para __ ", r: "passar diferentes informações para componentes" },
{p: "Pergunta 8", q: "Usamos estado (state) para __ ", r: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

deckReact.sort(shuffle)
function shuffle(){
    return Math.random() - 0.5;
}

export default function Game(){
    const[contador, setContador] = React.useState(0)  
    const[resposta, setResposta] = React.useState([])  
    let result = true;
    // if(contador === deckReact.length){
    //     gameOver()
    // }
    
    // function gameOver(resposta){
    //     for(let i = 0; i < resposta.length; i++){
    //         if(resposta[i] === <ion-icon name="close-circle"></ion-icon> ){
    //             return  false
    //         };
    //     };
        
    // };

    for(let i = 0; i < resposta.length ; i++){
        console.log(resposta[i].props)
    }
    return(
            <div className="game-board">
                <div className="title">
                    <img src={logo} alt={""}></img>
                    <h1>ZapRecall</h1>
                </div>
                {deckReact.map((item, index)=> 
                <Cards
                resposta={resposta}
                setResposta={setResposta}
                setContador={setContador}
                contador={contador}
                key={index} 
                position={index}
                question={item.q}
                answer={item.r}
                />)}
                <div className="footer" >
                    <div className={contador === deckReact.length ? "game-over" : "esconder" }>
                       {result ? <><img src={party} alt=""></img><span>Parabéns!</span><p>Você não esqueceu de nenhum flashcard!</p></> :
                       <><img src={sad} alt=""></img><span>Putz...</span><p>Ainda faltam alguns...
                       Mas não desanime!</p></>}
                    </div>
                    {contador}/{deckReact.length} Concluidos
                    <div>
                        {resposta}
                    </div>
                </div>
            </div>
        );
}
