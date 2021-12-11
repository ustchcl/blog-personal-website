import React, {Component} from 'react'
import Center from '../../components/Center';
import MarkdownRender from '../../components/MarkdownRender';
import Foot from '../home/Foot';
import './post_list.scss'
import cnn from '../../assets/md/cnn.md';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';


export default class Post extends Component {
  renderTags() {
    return (
      <div className="tags">
      {['All Posts', 'TypeScript', 'Rust', 'Tools', 'Haskell', 'Others'].map(
        (tagName, index) => (
          <span className="tag-item" key={index}>{tagName}</span>
        )
      )}
      </div>
    )
  }

  render() {
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
        <Header/>
        <NavBar/>
        {this.renderTags()}
        <div className="markdown-content">
          <MarkdownRender source={cnn}/>
        </div>

        <div style={{width: "99%", borderBottom: "1px solid black", height: 50}}></div>
        <div style={{height: 200, width: "100%", fontFamily: 'title-1'}}>
          <Center>
            Please Let me know
          </Center>
        </div>
        <Foot/>
      </div>
    )
  }
}