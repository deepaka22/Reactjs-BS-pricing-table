
import './Card.css'

const Card = (props)=>{

    const {name, price, stars, dummyprice, position}= props;

    return (
<div  class=" cards " id='card-eight'>

<div class="badge bg-dark text-white" id='badge'>{position}</div>
  <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Card image cap" id="picsize"/>

  <div class="card-body" id='spacing-body'>

    <h5 class="card-title" id='spacing-body'><b>{name}</b></h5>
    


    { stars !== "" ? <h4 id='spacing-bodys'> 

    <div id='stars'>
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    </div> 
    </h4> : <h4>&nbsp;</h4>}

    <p class="card-text" id='spacing-bodys'> <span id='strikeprice'>{dummyprice} </span>&nbsp;{price}</p>

  </div>

  <div  id='btn-bodys'>

  {name == "Fancy Product" ? <button type="button" class="btn btn-outline-dark align-self-end">View Option</button>:
  <button type="button" class="btn btn-outline-dark">Add to cart</button> }
  
  </div>
</div>  
     
    )
}

export default Card;