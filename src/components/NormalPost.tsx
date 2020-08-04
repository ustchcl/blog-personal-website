import React from 'react'
import './comp.scss'

type NormalPostProps = {
  title: string;
  createTime: number;
  description: string;
  postId?: number;
  associatedImage: string;
}

export default function NormalPost(props: NormalPostProps) {
  return (
    <div className="normal-post">
      {/* <div style={{width: '100%', height: 256,  
        backgroundImage: `url(${props.associatedImage})`,
        backgroundSize: 'cover'
      }}/> */}
      <img src={props.associatedImage} height={220 + Math.random() * 60} width="100%"/>
      <div className="text-info">
        <span className="time">Apr. 4 2 min</span>
        <span className="title">{props.title}</span>
        <span className="description">{props.description}</span>
      </div>
    </div>
  )
}