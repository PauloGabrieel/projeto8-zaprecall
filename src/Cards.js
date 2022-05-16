import React from "react"
import Button from "./Button"
export default function Cards({position, text, question, answer,setContador, contador,setResposta, resposta}){
    
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
                        <Button setResposta={setResposta} resposta={resposta} setContador={setContador} contador={contador} setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"red"} text={"Não lembrei"} />
                        <Button setResposta={setResposta} resposta={resposta} setContador={setContador} contador={contador} setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"orange"} text={"Quase não lembrei"}/>
                        <Button setResposta={setResposta} resposta={resposta} setContador={setContador} contador={contador} setIcon={setIcon} setAnswered={setAnswered} setClicked={setClicked} color={"green"} text={"Zap!!!"}/>
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