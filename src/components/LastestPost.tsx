import React from 'react'
import './comp.scss'

type LastestPostProps = {
  title: string;
  createTime: number;
  description: string;
  postId?: number;
  associatedImage: string;
}

export default function LastestPost(props: LastestPostProps) {
  return (
    <div className="lastest-post">
      <div style={{minWidth: '50%', height: '100%',  
        backgroundImage: `url(${props.associatedImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
      }}/>
      <div className="text-info">
        <span className="time">Apr. 4 2 min</span>
        <span className="title">{props.title}</span>
        <span className="description">{props.description}</span>
      </div>
    </div>
  )
}