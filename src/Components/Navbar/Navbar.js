import React ,{useEffect} from 'react'
import './Navbar.css'
import {Link,useLocation} from 'react-router-dom'
export default function Navbar() {
    let location = useLocation();
    useEffect(()=>{
    //   console.log(location?.pathname);
    },[location]);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand"to="/">
                    <div className='logo'>
                        <span className='logo-large'>
                            Obssesed
                        </span>
                        <span className='logo-small'>
                            typing
                        </span>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='container' id='container'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item" style={{padding:'0.5rem 1.5rem'}}>
                                <Link className={`nav-link ${location.pathname==='/'? "active":""}`}to="/">Home</Link>
                            </li>
                            <li className="nav-item" style={{padding:'0.5rem 1.5rem'}}>
                                <Link className="nav-link"to="/Justsee">Just see It</Link>
                            </li>
                            <li className="nav-item" style={{padding:'0.5rem 1.5rem'}}>
                                <Link className="nav-link"to="/Test">Start Testing</Link>
                            </li>
                            <li className="nav-item" style={{padding:'0.5rem 1.5rem'}}>
                                <Link className="nav-link"to="/Remark"> Remark</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex " role="search">
                        <button className="btn btn-outline-success me-2" type="button">Login</button>
                        <button className="btn btn-outline-success" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
