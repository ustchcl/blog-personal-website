import React from 'react'
import Center from './Center'
import './comp.scss'
import { Link } from "react-router-dom"

type NavBarProps = {
    menus: Array<{
        title: string, 
        goto: string
    }>
}

function renderMenuItem(data: {
    title: string, 
    goto: string
}, index: number) {
    return (
      <div className="menu-item-wrapper">
        <div className="menu-item" key={index}>
          <Center><Link style={{textDecoration: 'none'}} to={data.goto}>{data.title}</Link></Center>
        </div>
      </div>
    )
  }

export default function NavBar(props: NavBarProps) {
    return (
        <div className="nav-menu">
            <div className="menu-container">
                {props.menus.map(renderMenuItem)}
            </div>
        </div>
    )
}