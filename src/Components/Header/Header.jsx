import React from 'react'
import "../Header/header.css"
export const Header = () => {
  return (
    <header>
    <div className="container header">
        <div className="logo">
            <img src="	https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/logo.png" alt="" />
        </div>
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">SERVICES</a>
                    </li>
                    <li>
                        <a href="">PROJECTS</a>
                    </li>
                    <li>
                        <a href="">PAGES</a>
                    </li>
                    <li>
                        <a href="">INFOS</a>
                    </li>
                    <li>
                        <a href="">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </header>
  )
}
