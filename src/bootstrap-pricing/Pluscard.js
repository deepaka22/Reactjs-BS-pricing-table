import './Pluscard.css'


function Pluscard(){
    return (

        <div className='col-sm-4' id='freecrdbg'>

    <div class="card mb-3" id='card'> <span id='title'>PLUS</span>
    <div className='text-center border-bottom'><span id='cardheader'>&nbsp; $9</span>/month</div>
    <div class="card-body">
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;<b>5 Users</b></h5>
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;5GB Storage</h5>
    <h5 class="card-title" id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;Unlimited Public Projects</h5>
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;Community Access</h5>
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;Unlimited Private Projects</h5>
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;Dedicated Phone Support</h5>
    <h5 class="card-title"id='fonts'><span id='tickmark'>✔️</span>&nbsp;&nbsp;Free Subdomain</h5>
    <h5 class="card-title"id='fonts1'><span id='wrongmark'>❌</span>&nbsp;&nbsp;Monthly Status Reports</h5>        
    </div>
    <button type="button" class="btn btn-primary text-center" id='btn1'>BUTTON</button>
    </div>
        
        </div>
  
    )
}

export default Pluscard;