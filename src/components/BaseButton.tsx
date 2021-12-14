import React from 'react'
import './comp.scss'

type BaseButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    width?: string;
    height?: string;
}

export default class BaseButton extends React.Component<BaseButtonProps> {
    render() {
        return (
            <div style={{position: "relative", width: this.props.width, height: this.props.height}}>
            <button onClick={this.props.onClick} className="base-button"
            >{this.props.children}</button>
            </div>
        )
    }
}