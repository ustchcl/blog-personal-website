import React from "react"

export default function HeaderTop() {
    return (
        <div style={{ height: 200, marginTop: 50, width: 980, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ letterSpacing: "0.4rem", color: "black", fontSize: 22, fontFamily: 'title-2' }}>
                TALK IS CHEAP, SHOW ME THE CODE.
            </div>
            <div style={{ fontSize: 116, /* fontWeight: "bold", */ fontFamily: 'title-1' }}>
                Think Different
            </div>
        </div>
    )
}