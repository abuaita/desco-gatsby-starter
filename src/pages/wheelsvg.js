import React from "react"
import Wheel from "../assets/wheel.svg" // Tell Webpack this JS file uses this SVG 
// ^ this is imported as a React component because of gatsby-plugin-react-svg
import Ticker from "../assets/ticker.svg"


function WheelSVG() {
  // Import result is the URL of your image
  return <div><Ticker id='ticker' style={{position:'relative', left: 400, bottom: 400, zIndex: 1}} /><Wheel id='rockaRolla' /></div>
}

export default WheelSVG