import React from "react"
import AdminNav from "../../components/admin/AdminNav"
import Divider from "../../components/Divider"
import Pagination from "../../components/Pagination"
import Spacer from "../../components/Spacer"
import "./admin.scss"

export default class AdminManager extends React.Component {
    state = {
        current: 20
    }
    render() {
        return (
            <div className="admin">
                <div className="title"> Adminstration</div>
                <Divider/>
                <Spacer height="40px"/>
                <AdminNav></AdminNav>

                <Pagination totalPage={47} current={this.state.current} onChange={(page) => this.setState({current: page})}/>
            </div>
        )
    }
}