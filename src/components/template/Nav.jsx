import './Nav.css'
import NavItem from './Nav-item';
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="/" icon="fa-home" label=" Início" />
            <NavItem link="/users" icon="fa-users" label=" Usuários" />
        </nav>
    </aside>