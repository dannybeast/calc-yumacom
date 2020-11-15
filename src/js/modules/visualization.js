import { SVG } from '@svgdotjs/svg.js'
var Path = require('svg-path-generator');
export default function(){
  let $visualization = $('.visualization');
  let width = $visualization.data('width');
  let height = $visualization.data('height');
  let color = '#ccc';
  let bgColor = '#f8f8f8';


  var draw = SVG().addTo('.visualization').size('100%', '100%').viewbox(`0 0 ${width} ${width}`)
  
  drawBlock();
  drawTopLeftAngle();



// angle-top-left-width="100"
// angle-top-left-height="200"


    // Рисование прямоугольника
    function drawBlock(){
        var path = draw.path('M2900,600H100C44.8,600,0,555.2,0,500V100C0,44.8,44.8,0,100,0h2800c55.2,0,100,44.8,100,100v400C3000,555.2,2955.2,600,2900,600z').attr({ fill: color })
    }

    // Рисование дувого верхнего угла
    function drawTopLeftAngle(){
      let sliceWidth = $visualization.attr('angle-top-left-width')
      let sliceHeight = $visualization.attr('angle-top-left-height');
      let radius = $visualization.attr('angle-top-left-radius');
      // Если есть данные для среза
      if(sliceWidth || sliceHeight){
        var leftTopAngle = Path()
                          .moveTo(0, 0) 
                          .relative().lineTo(0, sliceHeight)
                          .relative().lineTo(sliceWidth, -sliceHeight)
                          .end()
        var leftTopAngle = draw.path(leftTopAngle).attr({ fill: bgColor })
      }else if(radius){

      }

    }



}



{/* <div class="visualization__box" style="width:${width}px;height:${height}px">
    <div class="visualization__angle-top-left"></div>
    <div class="visualization__angle-top-right"></div>
    <div class="visualization__angle-bottom-left"></div>
    <div class="visualization__angle-bottom-right"></div>
  </div> */}