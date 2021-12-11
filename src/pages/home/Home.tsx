import React from 'react'
import Center from '../../components/Center';
import MarkdownRender from '../../components/MarkdownRender';

import cnn from '../../assets/md/cnn.md';
import TheHomePost from '../../components/TheHomePost';
import NormalPost from '../../components/NormalPost';
import LastestPost from '../../components/LastestPost';
import Foot from './Foot';
import Header from '../../components/Header';


export default class Home extends React.Component {

  aboutMe() {
    return (
      <div style={{ textAlign: "left", display: "flex", flexDirection: "column", width: 284 }}>
        <span className="about-me-title">ABOUT ME</span>
        <div className="avatar" />
        <div className="my-description">
          我是一位喜欢看各种语言设计的程序员. 啥都不会是我的风格.
        </div>
        <div className="more base-text with-hover">
          更多 <span role="img" aria-label=">">👉</span>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header />
        <div style={{ display: 'flex', width: 980, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* <MarkdownRender source={cnn}/> */}
          <TheHomePost
            title="社会与灵魂: 东西方文化的根本差别"
            description="叔梁纥的正妻施氏，生了九个女儿却没有儿子，小妾为他生了长子孟皮。孟皮有足疾，叔梁纥很不满意，于是请求纳颜氏女儿为妾。"
            createTime={Date.now()}
            associatedImage="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fit/w_940,h_463,al_c,q_80/file.webp"
          />

          { /*
          
          <NormalPost 
            title="社会与灵魂: 东西方文化的根本差别"
            description="叔梁纥的正妻施氏，生了九个女儿却没有儿子，小妾为他生了长子孟皮。孟皮有足疾，叔梁纥很不满意，于是请求纳颜氏女儿为妾。"
            createTime={Date.now()}
            associatedImage="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fit/w_940,h_463,al_c,q_80/file.webp"
          />
          <LastestPost 
            title="社会与灵魂: 东西方文化的根本差别"
            description="叔梁纥的正妻施氏，生了九个女儿却没有儿子，小妾为他生了长子孟皮。孟皮有足疾，叔梁纥很不满意，于是请求纳颜氏女儿为妾。"
            createTime={Date.now()}
            associatedImage="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fit/w_940,h_463,al_c,q_80/file.webp"
          />
*/}
        </div>
        <div style={{ width: "99%", borderBottom: "1px solid black", height: 50 }}></div>
        <div style={{ display: "flex", marginTop: 20, width: "100%" }}>
          {/* 左侧 */}
          <div style={{ width: "66.6%", borderRight: "1px solid black", display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column", width: 607 }}>
              <span className="latest-post-title">LASTEST POST</span>
              {[1, 2, 3, 4, 5].map(i => (
                <div style={{ padding: 16, width: 575 }} key={i}>
                  <LastestPost
                    title="社会与灵魂: 东西方文化的根本差别"
                    description="叔梁纥的正妻施氏，生了九个女儿却没有儿子，小妾为他生了长子孟皮。孟皮有足疾，叔梁纥很不满意，于是请求纳颜氏女儿为妾。"
                    createTime={Date.now()}
                    associatedImage="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fit/w_940,h_463,al_c,q_80/file.webp"
                  />
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: "33.3%", display: 'flex', justifyContent: 'center' }}>
            {this.aboutMe()}
          </div>
        </div>
        <div style={{ width: "99%", borderBottom: "1px solid black", height: 20 }}></div>
        <div style={{ height: 200, width: "100%", fontFamily: 'title-1' }}>
          <Center>
            Please Let me know
          </Center>
        </div>
        <Foot />
      </div>
    )
  }
}