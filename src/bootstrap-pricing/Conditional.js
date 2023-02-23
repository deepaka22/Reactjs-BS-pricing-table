
import { useState } from "react";

function Conditional (){

    const [counter, func] = useState(0);

    const [user, setuser] = useState({
        name : 'dpk',
        age : null,
        location : 'chennai'
    })

    const handler = () =>{

        func(counter+1);
        setuser({
            name:'buhari',
            age: 18
        })
    }

    return(
        <div>
        <h1>Hello world {user.name}</h1>
        <h1>Hello world {user.name}</h1>
        <h1>Hello world {user.name}</h1>

        <h2>Hello  {counter}</h2>

        <button onClick={handler}>incre</button>
        </div>
    )


}

export default Conditional; 