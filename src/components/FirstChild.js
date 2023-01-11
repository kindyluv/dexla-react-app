import React, { useState, useEffect } from 'react';
import Header from './Header';
import FooterComponent from './FooterComponent';

const FirstChild = (props) => {
    const[asset, setAsset] = useState();
    const [frame, setFrame] = useState();
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState();
    const [text, setText] = useState();
    const [fText, setFText] = useState()

    useEffect(()=>{
        props.dataFetched.forEach((v)=>{
            if(v.id === "1:10"){
                setAsset(v)
            }

            if(v.id === "1:14"){
                setFrame(v)
            }

            if (v.id === "1:15") {
                setTitle(v)
            }

            if (v.id === "1:16") {
                setSubTitle(v)
            }

            if (v.id === "201:157") {
                setFText(v)
            }

            if (v.id === "201:159") {
                setText(v)
            }
        })
    })

  return (
    <div style={{ width: asset["absoluteRenderBounds"]["width"], height: asset["absoluteRenderBounds"]["height"], borderRadius: asset.cornerRadius, backgroundColor: `rgba(${asset["backgroundColor"]["r"]}, ${asset["backgroundColor"]["g"]}, ${asset["backgroundColor"]["b"]}, ${asset["backgroundColor"]["a"]})` }}>
        <Header frame={frame} title={title} subTitle={subTitle} />
        <FooterComponent fText={fText} text={text} />
    </div>
  )
}

export default FirstChild;
