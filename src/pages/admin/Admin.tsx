import { placeholder } from "@babel/types"
import { load } from "dotenv/types"
import React from "react"
import Center from "../../components/Center"
import Divider from "../../components/Divider"
import HeaderTop from "../../components/HeaderTop"
import { loading } from "../../Global"
import './admin.scss'

export default class Admin extends React.Component {
    state = {
        fillPercent: 0,
        show: false,
    }

    login() {
        if (loading) {
            var promise = new Promise(resolve => {
                setTimeout(resolve, 10000)
            })
            loading.current?.showWithPromise(promise);
        }
        console.log(loading)
        // this.setState({show: true})
        // setInterval(() => {
        //     const p = this.state.fillPercent
        //     this.setState({
        //         fillPercent: p >= 1 ? 0 : (p + 0.01)
        //     })
        // }, 50)
    }

    renderInput(label: string, inputType: string, placeholder?: string) {
        if (!placeholder) {
            placeholder = `请输入${label}`
        }
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
                <span style={{ flex: 3, textAlign: "left" }}>{label}</span>
                <input type={inputType} placeholder={placeholder} style={{ flex: 7 }} />
            </div>
        )
    }

    render() {
        const loginBoxWidth = "580px"
        return (
            <div className="h-center" style={{ textAlign: "center", width: "100%", position: "relative" }}>
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
                <div style={{ height: 100 }}></div>
                
                <div>
                <div
                    style={{
                        width: "682px",
                        display: "inline-flex",
                        justifyItems: "start",
                        height: "60px",
                        alignItems: "start"
                    }}
                >
                    <div style={{
                        height: "60px",
                        fontFamily: "title-1",
                        border: "1px solid black",
                        borderRight: "none",
                        borderBottom: "none",
                        width: "100px",
                        lineHeight: "60px",
                        fontSize: 24,
                    }}>
                        Login
                    </div>
                    <div style={{
                        width: "18px",
                        height: "70px",
                        borderRight: "1px solid black",
                        transform: "rotate(-30deg)"
                    }}></div>
                </div>

                <div style={{
                    width: loginBoxWidth,
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    padding: "50px",
                    position: "relative",
                    // alignItems: "center",
                }}>
                    {this.renderInput("用户名", "email")}
                    {this.renderInput("密码", "password")}

                    <button
                        onClick={this.login.bind(this)}
                        className="login-btn"
                        style={{
                            width: "200px",
                            height: "52px",
                            margin: "60px auto",
                            marginBottom: 0,
                            background: "transparent",
                            outline: "none",
                            border: "1px solid black",
                            fontSize: 22,
                            fontWeight: 300,
                            letterSpacing: 20,
                            paddingLeft: 20,
                            textAlign: "center"
                        }}
                    ><span>登录</span></button>
                </div>

            </div>


            </div >
        )
    }
}