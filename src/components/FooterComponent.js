import React from 'react'

const FooterComponent = (props) => {
  return (
     <div style={{alignItems: props.fText["counterAxisAlignItems"] , width: props.fText["absoluteBoundingBox"]["width"], height: props.fText["absoluteBoundingBox"]["height"], backgroundColor: `rgba(${props.fText["backgroundColor"]["r"]}, ${props.fText["backgroundColor"]["g"]}, ${props.fText["backgroundColor"]["b"]}, ${props.fText["backgroundColor"]["a"]})`, borderRadius: props.fText["cornerRadius"], justifyContent: props.fText["primaryAxisAlignItems"], paddingBottom: props.fText["paddingBottom"], paddingTop: props.fText["paddingTop"], paddingRight: props.fText["paddingRight"], paddingLeft: props.fText["paddingLeft"],}}>
        <div style={{ height: props.text["absoluteBoundingBox"]["height"], width: props.text["absoluteBoundingBox"]["width"], fontFamily: props.text["style"]["fontFamily"], fontSize: props.text["style"]["fontSize"], fontWeight: props.text["style"]["fontWeight"], lineHeight: props.text["style"]["lineHeightPx"], letterSpacing: props.text["style"]["letterSpacing"], }}>
          {props.text["characters"]}
        </div>
    </div>
  )
}

export default FooterComponent