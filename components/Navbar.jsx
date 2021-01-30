import Link from 'next/link';



export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark fixed-top" id="nav">
    <div className="container-fluid">
    <Link href="/">
      <a className="navbar-brand" >PRESTO-MIXT</a>
  </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" aria-current="page" >Despre Noi</a>
          </Link>
          </li>
          <li className="nav-item">

        
          <Link href="/contact">
            <a className="nav-link" aria-current="page" >Contacte</a>
          </Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}
