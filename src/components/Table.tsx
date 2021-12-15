import React from "react"
import * as R from "ramda"
import Center from "./Center"
import './comp.scss'

type Fn<F1, F2> = (_: F1) => F2


type TableConfigItem<T> = {
    name: string;
    extractor?: Fn<T, string>,
    render?: Fn<T, JSX.Element>;
    prop?: string;
    props?: Array<string>;
    flex: number;
}

export type TableConfig<T> = Array<TableConfigItem<T>>

type TableProps<T> = {
    title: string;
    tableConfig: TableConfig<T>;
    fetchData: (page: number) => Promise<{ elements: T[]; total: number }>;
    children?: JSX.Element | JSX.Element[]
}

type TableState<T> = {
    elements: T[];
    total: number;
    page: number;
}

export default class Table<T> extends React.Component<TableProps<T>, TableState<T>> {
    state = {
        total: 11,
        elements: [],
        page: 0
    }

    componentDidMount() {
        this.fetch()
    }

    async fetch() {
        const data = await this.props.fetchData(this.state.page);
        this.setState({
            total: data.total,
            elements: data.elements
        })
    }

    getInfo(config: TableConfigItem<T>, data: T) {
        if (config.props) {
          return R.path(config.props, data);
        } else if (config.prop) {
          return R.path([config.prop], data);
        } else if (config.extractor) {
          return config.extractor(data);
        } else {
          return "";
        }
      }

    render() {
        let len = this.props.tableConfig.length     
        const hasAction = !!this.props.children      
        const dataConfig = hasAction ? R.dropLast(1, this.props.tableConfig) : this.props.tableConfig 

        return (
            <table className="base-table">
                <thead>
                    <tr>
                        {
                            this.props.tableConfig.map((config, index) => <th key={index} style={{flex: config.flex}}><Center>{config.name}</Center></th>)
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.elements.map((element, index) => {
                            return (<tr key={`tr-${index}`}>
                                {
                                    dataConfig.map((columnConfig, index) => {
                                        return (
                                            <td
                                                key={`td-${index}`}
                                                style={{
                                                    flex: columnConfig.flex
                                                }}>
                                                    {columnConfig.render 
                                                        ? columnConfig.render(element) 
                                                        : <Center>{this.getInfo(columnConfig, element)}</Center>
                                                    }
                                            </td>
                                        )
                                    })
                                }
                                {
                                    hasAction 
                                        ? <td key="action" style={{flex: this.props.tableConfig[len-1].flex}}><Center>{this.props.children}</Center></td> 
                                        : <></>
                                }
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        )
    }
}