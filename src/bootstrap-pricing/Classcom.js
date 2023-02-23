import React, {Component} from "react";

class Classcom extends Component{

    constructor(props){
        super(props);
        this.state ={

            counter : 0,
           
            city:'',
        }
        
    }
        increment =()=>{

            this.setState({
                counter: this.state.counter + 1,
                name : this.state.name = "jerry",
                city : this.state.city ='chennai',
            })

        }
        decrement =()=>{

            this.setState({
                counter: this.state.counter -1,

            })
          

        }
        total = 0;

        array = [{
            name : 'deepak',
            age: 18,
            city: 'chennai',
            marks: [10,20,30,40]
        },{
            name : 'venkate',
            age: 20,
            city: 'chennai',
            marks: [10,20,30,40]
        },{
            name : 'Chepu',
            age: 22,
            city: 'chennai',
            marks: [10,20,30,40]

        }]
       

    render(){




        return(
            <div>
               {<h1>counter:{this.state.counter}</h1>}
               {this.state.counter  > 0 && this.state.counter < 5 ? <h1>name:{this.state.name} </h1> : <h1>name: N/A</h1>}
              { <h1>city:{this.state.city}</h1>}
               <button onClick={this.increment}>increment</button>
               <button onClick={this.decrement} >Decrement</button>
               <h2>{this.state.name}</h2>
               {this.array.map((ele,i)=>(   
                <div>
                <h2 key={i}>{ele.name}</h2>
                <h2 key={i}>{ele.age}</h2>
                <h2 key={i}>{ele.city}</h2>
                </div> 
                ))}
            </div>
        )
    }
}

export default Classcom;