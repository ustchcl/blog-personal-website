import React, {Component} from 'react'
import Center from '../../components/Center';
import MarkdownRender from '../../components/MarkdownRender';
import Foot from '../home/Foot';
import './post_list.scss'
import cnn from '../../assets/md/cnn.md';


export default class Post extends Component {
  readonly menus =  ['主页', '关于', '我的博客', '联系'];

  navigateTo(title: string) {
    let props: any = this.props;
    return () => {
      if (title === "我的博客") {
        (this.props as any)['history'].push('/posts')
        if (props.history) {
          props.history.push('/posts');
        }
      }
    }
  }

  renderHeader() {
    return (
      <div style={{height: 200, marginTop: 50, width: 980, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{letterSpacing: "0.4rem", color: "black", fontSize: 22, fontFamily: 'title-2'}}>
          TALK IS CHEAP, SHOW ME THE CODE.
        </div>
        <div style={{fontSize: 116, /* fontWeight: "bold", */ fontFamily: 'title-1'}}>
          Think Different
        </div>
      </div>
    )
  }

  renderMenuItem(title: string, index: number) {
    return (
      <div className="menu-item" key={index} onClick={this.navigateTo(title)}>
        <Center>{title}</Center>
      </div>
    )
  }

  renderBanner() {
    return (
      <div className="nav-menu">
        <div className="menu-container">
          {this.menus.map(this.renderMenuItem.bind(this))}
          <div className="menu-extra">
            <Center>github</Center>
          </div>
        </div>
      </div>
    )
  }

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
        {this.renderHeader()}
        {this.renderBanner()}
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