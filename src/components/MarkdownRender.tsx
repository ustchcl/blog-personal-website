import ReactMarkdown from 'react-markdown'
import React from 'react'
import RemarkMathPlugin from 'remark-math';
import MathJax from 'react-mathjax';

type MarkdownRenderProps = {
  source: string,
  renderers?: any
}

export default function MarkdownRender(props: MarkdownRenderProps) {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: (props: any) => 
        <MathJax.Node formula={props.value} />,
      inlineMath: (props: any) =>
        <MathJax.Node inline formula={props.value} />
    }
  };
  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...newProps}/>
    </MathJax.Provider>
  )
}