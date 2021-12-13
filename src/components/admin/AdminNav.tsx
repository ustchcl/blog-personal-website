import React from "react"
import "../comp.scss"

type NavItem = string;

export default class AdminNav extends React.Component {
    readonly items = [
        "文章管理",
        "用户管理",
        "推荐管理"
    ]


    renderNavItem(key: number, item: NavItem) {
        return (
            <div key={key} className="nav-item">
                <div>{item}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="vertial-nav">
                {this.items.map((item, key) => this.renderNavItem(key, item))}
            </div>
        )
    }
}