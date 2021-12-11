import React from "react"
import Divider from "../../components/Divider"
import HeaderTop from "../../components/HeaderTop"
import './admin.scss'

export default class Admin extends React.Component {
    renderInput(label: string) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "22px",
                    height: "80px",
                    fontWeight: 300
                }}
            >
                <span style={{flex: 3, textAlign: "left"}}>{label}</span>
                <input style={{flex: 7}}/>
            </div>
        )
    }

    render() {
        return (
            <div className="h-center" style={{textAlign: "center", width: "100%"}}>
                <div style={{
                    width: "100%", 
                    fontFamily: 'title-1',
                    fontSize: 56,
                    textAlign: "left",
                    padding: "30px 0 30px 50px",
                }}>
                    Adminstration
                </div>
                {Divider()}
                <div style={{height: 100}}></div>

                <div style={{
                    width: "600px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    padding: "50px"
                }}>
                    {this.renderInput("用户名")}
                    {this.renderInput("密码")}
                </div>

                
            </div>
        )
    }
}