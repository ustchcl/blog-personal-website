import React from "react"
import Center from "./Center"

export default class Loading extends React.Component {
    state = {
        fillPercent: 0,
        showLoading: false
    }

    async showWithPromise<T>(promise: Promise<T>): Promise<T> {
        this.setState({ fillPercent: 0, showLoading: true })
        const val = setInterval(() => {
            const p = this.state.fillPercent
            this.setState({
                fillPercent: p >= 1 ? 0 : (p + 0.01)
            })
        }, 50)
        const t = await promise;
        clearInterval(val)
        this.setState({ fillPercent: 0, showLoading: false })
        return t
    }
    
    render() {
        return (
            <div style={{
                position: "absolute",
                zIndex: 999,
                top: 0,
                left: 0,
                width: "100%",
                height: window.innerHeight,
                display: this.state.showLoading ? "block" : "none",
                background: "#00000044"
            }}>
                <Center>
                    <svg viewBox="0 0 100 100" style={{ width: 200, height: 200 }}>
                        <clipPath id="myClip">
                            <rect width="100" height={`${10 + 80 * this.state.fillPercent}`} />
                        </clipPath>
                        <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
                        <use clipPath="url(#myClip)" xlinkHref="#heart" fill="red" />
                        <text fill="#ffffff" x="31" y="53" fontSize="10">Loading</text>
                    </svg>
                </Center>
            </div>
        )
    }
}