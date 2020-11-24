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

  // Draw SVG
  
  $visualization.html('');
  $visualization.append(angleCounts);
  var draw = SVG().addTo('.visualization').size('100%', '100%').viewbox(`0 0 ${width} ${height}`)
  
  
  drawSVG();
  drawRadiusIndicators();


   function drawSVG(){  
    drawBlock();
    drawSliceAngles(sliceTopLeft);
    drawSliceAngles(sliceTopRight);
    drawSliceAngles(sliceBottomLeft);
    drawSliceAngles(sliceBottomRight);
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
    
    draw.path(path).attr({ fill: bgColor })
    
  }
}

window.reDrawSvg = function(){
  visualization();
}