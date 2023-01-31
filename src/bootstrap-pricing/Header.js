import './Header.css';

function Header(){

    return(
        <div className='container-fluid' id='header'>

            <div className='row'>

             <div className='col-md-0 col-lg-1'></div>   

            <div className='col-md-12 col-lg-6' >
            <h1 id='htag'>Bootstrap Responsive Pricing Table Snippet</h1>
            <h5 id='htag2'>Pricing Table with Custom Hover Effects and Buttons</h5>
            </div>

            <div className='col-md-0 col-lg-5' id="cardinfo" >
           
            <div className=" col-md-12 col-lg-5' card-body" >
            <p className="card-text">Premium Bootstrap themes, templates, and UI kits by Creative Tim.</p>
            <p className="card-text"><small className="text-muted">ads via Carbon</small></p>
             </div>         
            </div>
            

            
            
            



            </div>  
        </div>
    )

}

export  default Header