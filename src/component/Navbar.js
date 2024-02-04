import React from 'react'

export default function Navbar(props) {
    return (
        <div className='container-fluid'>
            <div className="row mb-3">
                <div className="col-12 col-md-11 py-3 mx-auto">
                    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 px-3 shadow-lg`}>
                        <div className="container-fluid">
                            <a className="navbar-brand fw-bold" href="/">Currency Converter</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">

                                    <li className="nav-item ps-md-5 ">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    
                                </ul>
                                <div className={`form-check form-switch ms-auto my-auto text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggelmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode Use</label>
      </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
