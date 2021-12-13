import React from "react";
import "./comp.scss"
import * as R from "ramda"

type PaginationProps = {
    totalPage: number;
    current: number;
    onChange: (page: number) => void;
}

type PaginationState = {
    offset: number;
    current: number;
    pageArray: number[];
}

export default class Pagination extends React.Component<PaginationProps, PaginationState> {
    state = {
        offset: 20,
        current: 2,
        pageArray: []
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate(prevProps: PaginationProps, prevState: PaginationState) {
        if (prevProps.current === this.props.current) {
            return;
        }
        this.init();
    }

    init() {
        // 计算offset
        let offset = this.props.current - 5;
        if (this.props.totalPage <= 9 || this.props.current <= 5) {
            offset = 0;
        } else if (this.props.current + 4 > this.props.totalPage) {
            offset = this.props.totalPage - 9
        }
        const arr = R.take(
            10,
            R.drop(
                offset, 
                R.range(1, this.props.totalPage+1)
            )
        )
        this.setState({
            pageArray: arr
        })
        this.setState({offset: offset, pageArray: arr})

    }

    previous() {
        this.props.onChange(this.props.current - 1)
    }

    next() {
        this.props.onChange(this.props.current + 1)
    }

    render() {
        return (
            <div className="pagination">
                <span onClick={this.previous.bind(this)}>&laquo;</span>
                {this.state.pageArray.map(i => <span className={i === this.props.current ? "active" : ""} key={i}>{i}</span>)}
                <span onClick={this.next.bind(this)}>&raquo;</span>
            </div>
        )
    }

}