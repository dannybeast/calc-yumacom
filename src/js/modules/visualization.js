import { SVG } from '@svgdotjs/svg.js'
var Path = require('svg-path-generator');
export function visualization(){
  let $visualization = $('.visualization');
  if(!$visualization.length) {return}
  let width = $visualization.attr('v-width');
  let height = $visualization.attr('v-height');
  let color = '#f5e3b5';
  let bgColor = '#f8f8f8';


  let angleCounts = `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>`

  let rounding = $visualization.attr('rounding');

  // Radius attrs
  let radiusTopLeft = $visualization.attr('angle-top-left-radius') || 0;
  let radiusTopRight = $visualization.attr('angle-top-right-radius') || 0;
  let radiusBottomLeft = $visualization.attr('angle-bottom-left-radius') || 0;
  let radiusBottomRight = $visualization.attr('angle-bottom-right-radius') || 0;

  // Slice attrs
  let sliceTopLeft = 'angle-top-left-slice';
  let sliceTopRight = 'angle-top-right-slice';
  let sliceBottomLeft = 'angle-bottom-left-slice';
  let sliceBottomRight = 'angle-bottom-right-slice';

  // Кромка
  let edge = $visualization.attr('edge');


  // Draw SVG
  $visualization.html('');
  $visualization.append(angleCounts);
  var draw = SVG().addTo('.visualization').size('100%', '100%').viewbox(`0 0 ${width} ${height}`)
  


  drawSVG();
  drawRadiusIndicators();
  drawEdges();
  


   function drawSVG(){  
    drawBlock();
    drawSliceAngles(sliceTopLeft);
    drawSliceAngles(sliceTopRight);
    drawSliceAngles(sliceBottomLeft);
    drawSliceAngles(sliceBottomRight);
    drawRounding();
  }


  function drawRounding(){
    if(!rounding){return}
    var roundSvg = SVG().addTo('.visualization').viewbox(`0 0 227.2 19.7`).attr({fill : '#d8c38e'});
    roundSvg.path(`M222.6,9.3C221,4.8,219.3,0,215.2,0s-5.7,4.8-7.4,9.3c-1.2,3.4-2.6,7.4-4.6,7.4c-1.9,0-3.3-3.9-4.5-7.4
	c-1.6-4.6-3.3-9.3-7.4-9.3s-5.7,4.8-7.4,9.3c-1.2,3.4-2.6,7.4-4.6,7.4c-1.9,0-3.3-3.9-4.5-7.4c-1.6-4.6-3.3-9.3-7.4-9.3
	c-4,0-5.7,4.8-7.4,9.3c-1.2,3.4-2.6,7.4-4.5,7.4c-1.9,0-3.3-3.9-4.6-7.4c-1.6-4.6-3.3-9.3-7.4-9.3v0c0,0-0.1,0-0.1,0
	c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-4,0-5.7,4.8-7.4,9.3c-1.2,3.3-2.5,7.1-4.4,7.3c-1.8-0.2-3.2-4-4.4-7.3
	c-1.6-4.6-3.3-9.3-7.4-9.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-4,0-5.7,4.8-7.4,9.3c-1.2,3.3-2.5,7.1-4.4,7.3
	c-1.8-0.2-3.2-4-4.4-7.3C101.6,4.8,99.9,0,95.8,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-4,0-5.7,4.8-7.4,9.3
	c-1.2,3.3-2.5,7.1-4.4,7.3c-1.8-0.2-3.2-4-4.4-7.3C77.7,4.8,76,0,72,0v0c-0.1,0-0.2,0-0.3,0v0c0,0-0.1,0-0.1,0c-4,0-5.7,4.8-7.4,9.3
	c-1.2,3.4-2.6,7.4-4.6,7.4c-1.9,0-3.3-3.9-4.5-7.4C53.4,4.8,51.7,0,47.7,0S42,4.8,40.3,9.3c-1.2,3.4-2.6,7.4-4.6,7.4
	c-1.9,0-3.3-3.9-4.6-7.4C29.6,4.8,27.9,0,23.8,0c-4,0-5.7,4.8-7.4,9.3c-1.2,3.4-2.6,7.4-4.5,7.4c-1.9,0-3.3-3.9-4.6-7.4
	C5.7,4.8,4,0,0,0v3c1.9,0,3.3,3.9,4.6,7.4c1.6,4.6,3.3,9.3,7.4,9.3c4,0,5.7-4.8,7.4-9.3C20.5,6.9,21.9,3,23.8,3
	c1.9,0,3.3,3.9,4.5,7.4c1.6,4.6,3.3,9.3,7.4,9.3s5.7-4.8,7.4-9.3C44.4,6.9,45.8,3,47.7,3c1.9,0,3.3,3.9,4.5,7.4
	c1.6,4.6,3.3,9.3,7.4,9.3c4,0,5.7-4.8,7.4-9.3C68.2,6.9,69.6,3,71.6,3s3.3,3.9,4.6,7.4c1.6,4.6,3.3,9.3,7.4,9.3v0c0,0,0.1,0,0.1,0
	c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c4,0,5.7-4.8,7.4-9.3C92.5,7,93.8,3.2,95.7,3c1.8,0.2,3.2,4,4.4,7.3c1.6,4.6,3.3,9.3,7.4,9.3
	c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c4,0,5.7-4.8,7.4-9.3c1.2-3.3,2.5-7.1,4.4-7.3c1.8,0.2,3.2,4,4.4,7.3c1.6,4.6,3.3,9.3,7.4,9.3
	c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c4,0,5.7-4.8,7.4-9.3c1.2-3.3,2.5-7.1,4.4-7.3c1.8,0.2,3.2,4,4.4,7.3c1.6,4.6,3.3,9.3,7.4,9.3
	v0c0.1,0,0.2,0,0.3,0v0c0,0,0.1,0,0.1,0c4,0,5.7-4.8,7.4-9.3c1.2-3.4,2.6-7.4,4.5-7.4c1.9,0,3.3,3.9,4.5,7.4
	c1.6,4.6,3.3,9.3,7.4,9.3s5.7-4.8,7.4-9.3c1.2-3.4,2.6-7.4,4.6-7.4c1.9,0,3.3,3.9,4.6,7.4c1.6,4.6,3.3,9.3,7.4,9.3
	c4,0,5.7-4.8,7.4-9.3c1.2-3.4,2.6-7.4,4.6-7.4s3.3,3.9,4.6,7.4c1.6,4.6,3.3,9.3,7.4,9.3v-3C225.2,16.7,223.8,12.8,222.6,9.3z`)
    if(rounding === "bottom"){
      roundSvg.attr({class : 'roundSVG-bottom'});
    }else{
      roundSvg.attr({class : 'roundSVG'});
    }
  }

  function drawRadiusIndicators(){
    if(radiusTopLeft != 0){
      $visualization.append(`<div class="v-radius v-radius_top-left">R${radiusTopLeft}</div>`)
    }
    if(radiusTopRight != 0){
      $visualization.append(`<div class="v-radius v-radius_top-right">R${radiusTopRight}</div>`)
    }
    if(radiusBottomLeft != 0){
      $visualization.append(`<div class="v-radius v-radius_bottom-left">R${radiusBottomLeft}</div>`)
    }
    if(radiusBottomRight != 0){
      $visualization.append(`<div class="v-radius v-radius_bottom-right">R${radiusBottomRight}</div>`)
    }
  }

  function drawEdges(){
    if(!edge){return}
    let edgesArr = edge.split(',')
    edgesArr.forEach((el)=>{

      switch (el){
        case 'top':
          $visualization.append(`<div class="edge edge_top"></div>`);
        break
        case 'left':
          $visualization.append(`<div class="edge edge_left"></div>`);
        break
        case 'right':
          $visualization.append(`<div class="edge edge_right"></div>`);
        break
        case 'bottom':
          $visualization.append(`<div class="edge edge_bottom"></div>`);
        break
        case 'angle-top-left':
          $visualization.append(`<div class="edge edge_angle-top-left"></div>`);
        break
        case 'angle-top-right':
          $visualization.append(`<div class="edge edge_angle-top-right"></div>`);
        break
        case 'angle-bottom-left':
          $visualization.append(`<div class="edge edge_angle-bottom-left"></div>`);
        break
        case 'angle-bottom-right':
          $visualization.append(`<div class="edge edge_angle-bottom-right"></div>`);
        break
      }


    })

  }

  
  function drawSliceIndicators(attr, w,h){

    if(attr === sliceTopLeft){
      $visualization.append(`<div class="v-radius v-radius_top-left">${w}x${h}</div>`)
    }
    if(attr === sliceTopRight){
      $visualization.append(`<div class="v-radius v-radius_top-right">${w}x${h}</div>`)
    }
    if(attr === sliceBottomLeft){
      $visualization.append(`<div class="v-radius v-radius_bottom-left">${w}x${h}</div>`)
    }
    if(attr === sliceBottomRight){
      $visualization.append(`<div class="v-radius v-radius_bottom-right">${w}x${h}</div>`)
    }
  }


  // Draw block path
  function drawBlock(){
  
    var path = draw.path(`
    M${width - radiusBottomRight} ${height}H${radiusBottomLeft}c-${radiusBottomLeft/2} 0-${radiusBottomLeft}-${radiusBottomLeft/2}-${radiusBottomLeft}-${radiusBottomLeft}V${radiusTopLeft}C0 ${radiusTopLeft/2} ${radiusTopLeft/2} 0 ${radiusTopLeft} 0h${width - radiusTopLeft - radiusTopRight}c${radiusTopRight/2} 0 ${radiusTopRight} ${radiusTopRight/2} ${radiusTopRight} ${radiusTopRight}v${height - radiusTopRight - radiusBottomRight}
C${width} ${height - radiusBottomRight/2} ${width - radiusBottomRight/2} ${height} ${width - radiusBottomRight} ${height}z
    `).attr({ fill: color })

  }

  function generatePath(w,h, attr){

    switch (attr){
      case sliceTopLeft:
        return Path()
            .moveTo(0, 0) 
            .relative().lineTo(0, h)
            .relative().lineTo(w, -h)
            .end()
        break
      case sliceTopRight:
        return Path()
            .moveTo(width - w, 0) 
            .relative().lineTo(w, 0)
            .relative().lineTo(0, h)
            .end()
        break
      case sliceBottomLeft:
        return Path()
            .moveTo(0, height - h) 
            .relative().lineTo(0, h)
            .relative().lineTo(w, 0)
            .end()
        break
      case sliceBottomRight:
        return Path()
            .moveTo(width - w, height) 
            .relative().lineTo(w, 0)
            .relative().lineTo(0, -h)
            .end()
        break

    }
    
  }

  function drawSliceAngles(attr){
    
    let sliceSize = $visualization.attr(attr);
    if(!sliceSize) {return}
    
    let sliceSizeArr = sliceSize.split(',')
    let w = +sliceSizeArr[0];
    let h = +sliceSizeArr[1];
    let path = generatePath(w,h, attr)
    drawSliceIndicators(attr, w, h);
    
    draw.path(path).attr({ fill: bgColor })
  
  }
}

window.reDrawSvg = function(){
  visualization();
}