import React from 'react'
import Center from '../../components/Center';
import MarkdownRender from '../../components/MarkdownRender';

import cnn from '../../assets/md/cnn.md';
import TheHomePost from '../../components/TheHomePost';
import NormalPost from '../../components/NormalPost';
import LastestPost from '../../components/LastestPost';
import Foot from './Foot';


function merge(a: Uint8Array, b: Uint8Array): Uint8Array {
  var c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

function Uint8ArrayToString(data: Uint8Array){
  var dataString = new String();
  for (var i = 0; i < data.length; i++) {
    dataString += String.fromCharCode(data[i]);
  }
  return dataString
}

export default class Home extends React.Component {
  readonly menus =  ['主页', '关于', '我的博客', '联系'];

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
      <div className="menu-item" key={index}>
        <Center>{title}</Center>
      </div>
    )
  }

  renderBanner() {
    return (
      <div className="nav-menu">
        <div className="menu-container">
          {this.menus.map(this.renderMenuItem)}
          <div className="menu-extra">
            <Center>github</Center>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
        {this.renderHeader()}
        {this.renderBanner()}
        <div style={{display: 'flex', width: 980, flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
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
        <div style={{width: "99%", borderBottom: "1px solid black", height: 50}}></div>
        <div style={{display: "flex", marginTop: 20, width: "100%"}}>
          {/* 左侧 */}
          <div style={{width: "66.6%", borderRight: "1px solid black", display: 'flex', justifyContent: 'center'}}>
            <div style={{textAlign: "left", display: "flex", flexDirection: "column", width: 607}}>
              <span className="latest-post-title">LASTEST POST</span>
              {[1, 2, 3, 4, 5].map(i => (
                <div style={{padding: 16, width: 575}} key={i}>
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
          <div style={{width: "33.3%", display: 'flex', justifyContent: 'center'}}>
            <div style={{textAlign: "left", display: "flex", flexDirection: "column", width: 284}}>
              <span className="about-me-title">ABOUT ME</span>
              <div className="avatar"/>
              <div className="my-description">
                在神话传说中元始天尊的道场玉虚宫坐落其上，故而别名："玉京山"。又因昆仑山位列西北乾位之上，故而昆仑山又名：天柱。
                昆仑山乃是中国第一圣山、华夏龙脉之祖。昆仑山西起帕米尔高原，山脉全长2500公里，其最高峰在中国青海、新疆交界处。
              </div>
            </div>
          </div>
        </div>
        <div style={{width: "99%", borderBottom: "1px solid black", height: 20}}></div>
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