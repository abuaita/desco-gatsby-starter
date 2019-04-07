import React from "react"
import WheelSVG from './wheelsvg'
import * as d3 from "d3";

function animate() {
  var t0 = Date.now();

  let wheel = d3.select('#rockaRolla')
  //let currPos = wheel.attr('transform');
  let randRotation = (Math.random() * 4777); //rotate ~5 times plus a random amt
  console.log(randRotation);
  let timer = d3.timer(function(duration) {
    let delta = (Date.now() - t0);
    let speed = .37; // can be whatever you like 
    speed = (speed - (.1 * duration/(5000+randRotation)))
    wheel.attr("transform", function(d) {
      return "rotate(" + delta * speed + ")";
    });
    if (duration > (5000+randRotation)){
      timer.stop();
    }
  });
}

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600, textAlign: 'center' }}>
    <h1>Let's do lunch</h1>
    <WheelSVG />
    <p style={{ display: 'inline-block', padding: 12 }}> 
      Spin her up, cowboy: 
    </p>
    <button style={{ display: 'inline-block' }} onClick={animate}>
      Decide my fate
    </button>
  </div>
)