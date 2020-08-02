import React from 'react'
import Center from '../../components/Center';
import MarkdownRender from '../../components/MarkdownRender';

import cnn from 'raw-loader!../../assets/md/cnn.md';


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

  state = {
    favMd: "#Loading"
  }

  componentDidMount() {
    this.initData()
  }

  async initData() {
    let result = await fetch(cnn)
    console.log(result.status)
    let reader = result.body?.getReader()
    let undone = true
    let data = new Uint8Array();
    while (undone) {
      let temp = await reader?.read()
      undone = !temp?.done;
      data = merge(data, temp?.value ?? new Uint8Array())
    }
    console.log(Uint8ArrayToString(data))
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
    console.log(cnn);
    return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
        {this.renderHeader()}
        {this.renderBanner()}
        <MarkdownRender text={cnn}/>
      </div>
    )
  }
}