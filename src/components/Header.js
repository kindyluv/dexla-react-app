import React from 'react'

const Header = (props) => {
  return (
    <div style={{ width: props.frame["absoluteBoundingBox"]["width"], height: props.frame["absoluteBoundingBox"]["height"], backgroundColor: `rgba(${props.frame["backgroundColor"]["r"]}, ${props.frame["backgroundColor"]["g"]}, ${props.frame["backgroundColor"]["b"]}, ${props.frame["backgroundColor"]["a"]})`, textAlign: props.frame["counterAxisAlignItems"], gap: props.frame["itemSpacing"] }}>
        <div style={{ width: props.title["absoluteBoundingBox"]["width"], height: props.title["absoluteBoundingBox"]["height"], alignSelf: props.title["layoutAlign"] }}>
            {props.title["characters"]}
        </div>
        <div>
            {props.subTitle["characters"]}
        </div>
    </div>
  )
}

export default Header