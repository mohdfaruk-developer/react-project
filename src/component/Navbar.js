import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-2`}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{fontSize:'32px',fontWeight:'700'}}>{props.tital}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            {/* <li className="nav-item active dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
              </div>
            </li> */}
            <li className="nav-item active">
              <Link className="nav-link" to="/about" >{props.aboutest}</Link>
            </li>
          </ul>
          <div className={`custom-control custom-switch ml-1 text-${props.mode==='light'?'dark':'light'}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.togglemode} />
              <label className="custom-control-label" htmlFor="customSwitch1">{props.mode==='light'?'Enable Dark Mode':'Enable light Mode'}</label>
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  tital: PropTypes.string,
  aboutest: PropTypes.string
}

Navbar.defaultProps = {
  tital: 'set tital here',
  aboutest: 'set about here'
}


