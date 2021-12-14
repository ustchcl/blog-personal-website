import React from "react"
import * as R from "ramda"
import Center from "./Center"

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
    fetchData?: (page: number) => Promise<{ elements: T[]; total: number }>;
    children?: React.Component[]
}

type TableState<T> = {
    elements: T[];
    total: number;
}

export default class Table<T> extends React.Component<TableProps<T>, TableState<T>> {
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
        const len = this.props.tableConfig.length + ((this.props.children ?? []).length > 0 ? 1 : 0)
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={len}>{this.props.title}</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.elements.map(element => {
                            return (<tr>
                                {
                                    this.props.tableConfig.map((columnConfig, index) => {
                                        return (
                                            <td
                                                key={index}
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
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        )
    }
}