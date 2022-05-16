export default function Button({color, text, setClicked, setAnswered, setIcon, setContador, contador, setResposta, resposta}){
    
    
    function pick(setClicked,setAnswered, color){
        setClicked(false)
        setContador(contador + 1)
        if(color === "red"){
            setAnswered(`answered text-red`)
            setIcon("close-circle")
            setResposta([...resposta,<ion-icon name="close-circle"></ion-icon>])
        }else if(color === "orange"){
            setAnswered(`answered text-orange`)
            setIcon("help-circle")
            setResposta([...resposta,<ion-icon name="help-circle"></ion-icon>])
        }else{
            setAnswered(`answered text-green`)
            setIcon("checkmark-circle")
            setResposta([...resposta,<ion-icon name="checkmark-circle"></ion-icon>])
        }
    }
    
    return(
        <div onClick={()=>pick(setClicked,setAnswered, color,setIcon)} className={`button ${color}`}>
            {text}
        </div>
    );
}