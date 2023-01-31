import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.css'

function Navbar(){

    return (

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="Logo" id="img1"/>
    <b id="boot">Start Bootstrap</b>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
    <li class="nav-item dropdown" id='navitems'>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
    </li>

     <li class="nav-item dropdown" id='navitems'>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Templates 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
    </li>

    <li class="nav-item dropdown"id='navitems'>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bundles 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
    </li>
    
    <li class="nav-item" id='navitems'>
          <a class="nav-link active" aria-current="page" href="#">Forms</a>
    </li>

    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
    </li>

</ul>
<div class="d-flex justify-content-end " id ="btn">
    <button class="btn btn-outline-success me-2 " type="button">Blog</button>
    <button class="btn btn-sm btn-danger" type="button">Log In</button>
  </div>

</div>
</div>
</nav>

    )

}

export default Navbar