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

    goto(page: number) {
        return () => {
            this.props.onChange(page)
        }
    }

    render() {
        const disablePrev = this.state.offset === 0
        const disableNext = this.state.offset === this.props.totalPage - 9
        const activeCurrent = (i: number) => this.props.current === i
        return (
            <div className="pagination">
                <button className="unselectable" onClick={this.previous.bind(this)} disabled={disablePrev}>&laquo;</button>
                {this.state.pageArray.map(i => <span onClick={this.goto(i).bind(this)} className={activeCurrent(i) ? "active unselectable" : "unselectable"} key={i}>{i}</span>)}
                <button className="unselectable" onClick={this.next.bind(this)} disabled={disableNext}>&raquo;</button>
            </div>
        )
    }

}