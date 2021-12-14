import React from "react"
import AdminNav from "../../components/admin/AdminNav"
import Divider from "../../components/Divider"
import Pagination from "../../components/Pagination"
import Spacer from "../../components/Spacer"
import Table, { TableConfig } from "../../components/Table"
import * as R from "ramda"
import "./admin.scss"
import BaseButton from "../../components/BaseButton"


type Article = {
    title: string;
    createAt: string;
    updateAt: string;
    markdownPath: string;
}

function gen(): Article {
    return {
        title: "Article-title",
        createAt: "2021-12-22 00:22:23",
        updateAt: "2021-12-22 00:22:23",
        markdownPath: "/user/main/string.md"
    }
}

async function fetchData(page: number) {
    return {
        total: 21,
        elements: R.repeat(gen(), 10)
    }
}

export default class AdminManager extends React.Component {
    tableConfig: TableConfig<Article> = [
        { name: "标题", prop: "title", flex: 2 },
        { name: "创建时间", prop: "createAt", flex: 2 },
        { name: "更新时间", prop: "updateAt", flex: 2 },
        { name: "路径", prop: "markdownPath", flex: 3 },
        { name: "操作", flex: 3}
    ]
    state = {
        current: 20
    }
    render() {
        return (
            <div className="admin h-center">
                <div className="admin-title"> Adminstration</div>
                <Divider/>
                <Spacer height="40px"/>
                <AdminNav></AdminNav>

                <Pagination totalPage={47} current={this.state.current} onChange={(page) => this.setState({current: page})}/>
                <Table title="SomeTable" tableConfig={this.tableConfig} fetchData={fetchData}>
                    <BaseButton width="100px" height="30px">Delete</BaseButton>
                </Table>
            </div>
        )
    }
}