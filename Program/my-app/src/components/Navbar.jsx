import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<h3 className='text-center'>Categorias</h3><hr />
<ul className='justify-content-center nav shadow-lg p-3 mb-5 bg-body rounded'>


  <li class="nav-item "> 
  <Link to="/category/deportivo" className='nav-link'>Deportivo</Link>
  </li>
  <li class="nav-item">
  <Link to="/category/casual" className='nav-link'>Casual</Link>
  </li>
  <li class="nav-item">
  <Link to="/category/indumentaria"className='nav-link'>Indumentaria</Link>
  </li>
  <li class="nav-item">
  <Link to="/category/accesorios" className='nav-link'>Accesorios</Link>
  </li>
</ul>
</>
  )
}

export default Navbar