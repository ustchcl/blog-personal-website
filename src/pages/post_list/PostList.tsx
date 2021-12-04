import React, {Component} from 'react'
import Center from '../../components/Center';
import NavBar from '../../components/NavBar';
import NormalPost from '../../components/NormalPost';
import Foot from '../home/Foot';
import './post_list.scss'


export default class PostList extends Component {
  readonly  menus =  [
    {title: '主页', goto: '/home'},
    {title: '关于', goto: '/home'},
    {title: '我的博客', goto: '/posts'},
    {title: '联系', goto: '/home'},
    {title: 'Github', goto: '/home'},
  ]

  navigateTo(title: string) {
    let props: any = this.props;
    return () => {
      if (title === "我的博客") {
        if (props.history) {
          props.history.push('/posts');
        }
      } else {
        props.history.push(`/post/${title}`);
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


  leftCol() {
    return (
      <div className="post-col">
        {[1,2,3,4,5,6,7,8,9].map((_, index) => (
          <div className="post-item" key={index} onClick={this.navigateTo("123")}>
            <NormalPost 
              title={"社会与灵魂: 东西方文化的根本差别, 纯粹可知理性和不可知论者".substring(0, Math.random() * 20 + 10)}
              description={"叔梁纥的正妻施氏，生了九个女儿却没有儿子，小妾为他生了长子孟皮。孟皮有足疾，叔梁纥很不满意，于是请求纳颜氏女儿为妾。".substring(0, Math.random() * 60 + 10)}
              createTime={Date.now()}
              associatedImage="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fit/w_940,h_463,al_c,q_80/file.webp"
            />
          </div>
        ))}
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
        <NavBar menus={this.menus}/>
        {this.renderTags()}
        <div style={{display: 'flex', width: 980, justifyContent: 'space-between'}}>
          {this.leftCol()}
          {this.leftCol()}
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