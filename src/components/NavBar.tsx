import React from 'react'
import Center from './Center'
import './comp.scss'
import { Link } from "react-router-dom"
import { MENUS } from '../config/Constants'

function renderMenuItem(data: {
    name: string, 
    goto: string
}, index: number) {
    return (
      <div className="menu-item-wrapper">
        <div className="menu-item" key={index}>
          <Center><Link style={{textDecoration: 'none'}} to={data.goto}>{data.name}</Link></Center>
        </div>
      </div>
    )
  }

export default function NavBar() {
    return (
        <div className="nav-menu">
            <div className="menu-container">
                {MENUS.map(renderMenuItem)}
            </div>
        </div>
    )
}