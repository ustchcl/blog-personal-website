import ReactMarkdown from 'react-markdown'
import React from 'react'

type MarkdownRenderProps = {
  text: string
}

export default function MarkdownRender(props: MarkdownRenderProps) {
  return <ReactMarkdown source={props.text}/>
}