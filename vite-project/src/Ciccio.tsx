import {Fragment } from "react"
import {useState } from "react"
import './assets/Ciccio.css'

interface PropsType{
    valore: number,
    mioNome: string,
    aggiorna: Function
    contatore: number

}

function Ciccio(props: PropsType){

    const {valore,mioNome,aggiorna,contatore}= props
    const name= "queen"
    const counter= 3

    //stato del componente ci sono 2 cose importanti: lo stato e le prox( proprieta: info che si passa dai componenti padri ai componenti figli e se io dal componenter padre voglio passare le info al componente figlio uso le prox)
    //const [contatore, setContatore] = useState(0)

    const cliccato= () => {
        aggiorna(contatore +1)
       
    }
    return (
        
        <>
        <h1>hello {mioNome} </h1>
        <h2> il bottone del padre vale {valore} </h2>
        <button onClick={()=> { cliccato() }}> Cliccami {contatore}</button>
       </>

    )
}
export default Ciccio