import React from 'react'
import './comp.scss'
import Center from './Center'


type TheHomePostProps = {
  title: string;
  createTime: number;
  description: string;
  postId?: number;
  associatedImage: string;
}

export default function TheHomePost(props: TheHomePostProps) {
  return (
    <div className="home-post">
      <div className="tag"><Center>FEATURED POST</Center></div>
      <div style={{width: '100%', height: 400,  
        backgroundImage: `url(${props.associatedImage})`,
        backgroundSize: 'cover'
      }}/>
      <div className="text-info">
        <span className="time">Apr. 4 2 min</span>
        <span className="title">{props.title}</span>
        <span className="description">{props.description}</span>
      </div>
    </div>
  )
}