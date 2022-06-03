import React, { useState } from 'react';
import './header.css';
import { Link } from "react-router-dom"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="header-content">
            <nav className="navBar">
          
              <h2 className="logo"><Link className="logo" to="/">Depre Info</Link></h2> 

                <div className="menu-mobile" onClick={show} >
                    <div className="hamburguer"></div>
                </div>
           

                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}>

                    <li className="li-header"><Link onClick={show} className="link" to="/">Home</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/ansiedade">Ansiedade</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/depressao">Depressão</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/tratamento">Tratamento</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="https://docs.google.com/forms/d/e/1FAIpQLSd0ovSngYKJuvdfG6S2_EoXnRkCJdjygSf0mRKnMJGtceWAqA/viewform?usp=pp_url">Questionario</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header