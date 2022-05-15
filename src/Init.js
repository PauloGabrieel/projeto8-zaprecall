import logo from "./assets/image/logo.png"








export default function Init({setStart}){
    function startGame(){
        setStart(false);
    }
    
    return(
        <div className="welcome-screen">
            <div><img src={logo} alt=""></img></div>
            <div><h1>ZapRecall</h1></div>
            <div><button onClick={startGame}>Iniciar Recall!</button></div>
        </div>
    );
};
