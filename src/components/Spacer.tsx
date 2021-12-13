import React from "react"

type SpacerProps = {
    width?: string;
    height?: string;
}

export default function Spacer(props: SpacerProps = {}) {
    return (
        <div style={{
            width: props.width ?? "auto",
            height: props.height ?? "auto",
        }}></div>
    )
}