import React from 'react'

import { useState } from 'react'
import { studentsData } from '../../data/studentsData';
import './Header.css'

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }
  return (
    <header className='header'>
        <div className='banner'>
            <img className='logo' src='https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png' alt=''></img>
        <div className='header--currentComponentName'>{props.currentPage}
        <div className="header--menu">
            {/* <img className='header--menuImage' width="36px" height="36px" src={userpic} alt='user picture'/> */}
            <button className='header--menuButton' onClick={toggleMenu}>
                <span className='header--buttonText'>Students</span>
                {/* <img className={"header--buttonImage" + (menuOpen ? " open" : "")} src={arrow} alt="arrow" /> */}
            </button>
            <div className={"header--dropdown" + (menuOpen ? '' : " collapsed")}>
                <ul className='header--dropdownList'>
                    {studentsData.map((student) => {
                        return <li className='header--dropdownListItem'>
                            <span></span>{student.name}
                            <img className='student--img' src='https://www.freeiconspng.com/uploads/face-avatar-icon-21.png' alt=''></img>
                        </li>
                    })}
                </ul>
            </div>
        </div>
        </div>
        </div>
    </header>
  )
}

export default Header