import React from 'react'

type CenterProps = { children: any, style?: React.CSSProperties, className?: string, onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined }

export default function Center(props: CenterProps) {
  return (
    <div onClick={props.onClick} style={{
      display: 'flex', 
      justifyContent: 'center', 
      justifyItems: 'center', 
      alignItems: 'center',
      alignContent: 'center',
      width: '100%', 
      height: '100%',
      ...props.style
    }}
    className={props.className}
    >
      {props.children}
    </div>
  )
}