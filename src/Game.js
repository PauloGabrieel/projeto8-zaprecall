
import logo from "./assets/image/logo.png";
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

function Button({color, text, setClicked, setAnswered, setIcon}){
    function pick(setClicked,setAnswered, color){
        setClicked(false)
        if(color === "red"){
            setAnswered(`answered text-red`)
            setIcon("close-circle")
        }else if(color === "orange"){
            setAnswered(`answered text-orange`)
            setIcon("help-circle")
        }else{
            setAnswered(`answered text-green`)
            setIcon("checkmark-circle")
        }
    }
    
    return(
        <div onClick={()=>pick(setClicked,setAnswered, color,setIcon)} className={`button ${color}`}>
            {text}
        </div>
    );
}

function Card ({position, text, question, answer}){
    const [clicked, setClicked] = React.useState(false)
    const [status ,setStatus] = React.useState(true)
    const [answered, setAnswered] = React.useState("");
    const [icon, setIcon] = React.useState("play-outline")
    function showQuestion(position){
        setClicked(true)
    }
    function changeCard(){
        setStatus(false)
    }
    
    return(
            <>
                {clicked ? (status ? (<div className="card-question">
                    <p>{question}</p>
                    <ion-icon onClick={()=>changeCard()} name="repeat-outline"></ion-icon>
                </div>):
                (<div className="card-answer">
                    <p>{answer}</p>
                    <div className="card-footer">
                        <Button setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"red"} text={"Não lembrei"} />
                        <Button setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"orange"} text={"Quase não lembrei"}/>
                        <Button setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"green"} text={"Zap!!!"}/>
                    </div>
                </div>)
                )
                :
                (<div className="card" onClick={showQuestion}>
                    <p className={answered}>{`Pergunta ${position+1}`}</p>
                    <ion-icon name={icon}></ion-icon>
                </div>)}
            </>   
        );
}



export default function Game(){
return(
        <div className="game-board">
            <div className="title">
                <img src={logo} alt={""}></img>
                <h1>ZapRecall</h1>
            </div>
            {deckReact.map((item, index)=> 
            <Card 
            key={index} 
            position={index}
            question={item.q}
            answer={item.r}
            />)}
        </div>
    );
}
