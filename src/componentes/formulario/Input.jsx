import React, {useState} from "react";


export default props => {


    const [valor, setValor] = useState("");
    const [valor1, setValor1] = useState("");
    const [valor4, setValor4] = useState("");
    const [valor3, setValor3] = useState("");
    const valor2 = props.titulo;


 
    function handle(e){
        setValor(e.target.value)
    }


    function handle1(e){
        setValor1(e.target.value)
    }


    function setValor4(){
        setValor4(valor1)
        setValor3(valor)
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
       
            <label htmlFor="">valor1</label>
            <input  value={valor} onChange={handle}/>
            <label htmlFor="">valor2</label>
            <input  value={valor1} onChange={handle1}/>
            <h2>{valor3}</h2>
            <h2>{valor4}</h2>
            <button onClick={setValor4}>Exibir Valor</button>
           
        </div>
    )
}
