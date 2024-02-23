
import React,{ useState } from "react";

const Incress=()=>{

const [number,numberfunction]=useState(0)

//incress
const incree=()=>{
    numberfunction((countincress)=>{
return countincress+1
    }

    )
}

// decress

const decress=()=>{
    numberfunction((decresscount)=>{
        return decresscount-1
    })
}


    return(
        <section className="continer">

            <h1 className="title">increment operations</h1>
            <button className="button" onMouseOver={incree}>increment</button>
         <span>{number}</span>
          <button className="button" onMouseOver={decress}>decrement</button>

        </section>
    )
}

export default Incress;