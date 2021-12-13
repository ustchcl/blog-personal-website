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
    }

    renderInput(label: string, inputType: string, placeholder?: string) {
        if (!placeholder) {
            placeholder = `请输入${label}`
        }
        return (
            <div className="label-input">
                <span className="label">{label}</span>
                <input type={inputType} placeholder={placeholder} style={{ flex: 7 }} />
            </div>
        )
    }

    render() {
        return (
            <div className="h-center" style={{ textAlign: "center", width: "100%", position: "relative" }}>
                <div className="title"> Adminstration</div>
                <Divider />
                <div style={{ height: 100 }}></div>
                <div>
                    <div className="login-bar">
                        <div className="text"> Login </div>
                        <div className="right-border"></div>
                    </div>

                    <div className="login-box">
                        {this.renderInput("用户名", "email")}
                        {this.renderInput("密码", "password")}
                        <button
                            onClick={this.login.bind(this)}
                            className="login-btn"
                        >登录</button>
                    </div>
                </div>
            </div >
        )
    }
}