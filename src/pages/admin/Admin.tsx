import { placeholder } from "@babel/types"
import { load } from "dotenv/types"
import React from "react"
import Center from "../../components/Center"
import Divider from "../../components/Divider"
import HeaderTop from "../../components/HeaderTop"
import { loading } from "../../Global"
import { user } from "../../network/Endpoint"
import { useNavigate } from "react-router-dom";

import './admin.scss'


export default class Admin extends React.Component {
    state = {
        fillPercent: 0,
        show: false,
        email: "",
        password: "",
    }

    async login() {
        if (loading) {
            const p = user.login(this.state.email, this.state.password)
            const successful = await loading.current?.showWithPromise(p)
            const navigate = useNavigate();
                navigate("/admin")
            if (successful) {
                console.log("log in success")
                const navigate = useNavigate();
                navigate("/admin")
            }
        }
    }

    renderInput(label: string, inputType: string, value: string, onChange: (s: string) => void, placeholder?: string) {
        if (!placeholder) {
            placeholder = `请输入${label}`
        }
        return (
            <div className="label-input">
                <span className="label">{label}</span>
                <input type={inputType} placeholder={placeholder} style={{ flex: 7 }} value={value} onChange={e => onChange(e.target.value)}/>
            </div>
        )
    }

    render() {
        return (
            <div className="h-center" style={{ textAlign: "center", width: "100%", position: "relative" }}>
                <div className="admin-title"> Adminstration</div>
                <Divider />
                <div style={{ height: 100 }}></div>
                <div>
                    <div className="login-bar">
                        <div className="text"> Login </div>
                        <div className="right-border"></div>
                    </div>

                    <div className="login-box">
                        {this.renderInput("用户名", "email", this.state.email, email => this.setState({email}))}
                        {this.renderInput("密码", "password", this.state.password, password => this.setState({password}))}
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