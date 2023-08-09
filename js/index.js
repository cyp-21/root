(function () {
  var chartDom = document.querySelector('.topbody');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    graphic: {
      elements: [
        {
          type: 'text',
          right: 'center',
          top: 'center',
          style: {
            text: 'Welcome To Use My Webpage!',
            fontSize: 80,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 1
          },
          keyframeAnimation: {
            duration: 3000,
            loop: false,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: 'black'
                }
              }
            ]
          },
          silent:true
        }
      ]
    }
  };
  option && myChart.setOption(option);
  window.addEventListener('resize',()=>{
    myChart.resize();
  })
})();

(function () {
  var chartDom = document.querySelector('.rightbody');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 200],
        left:'-25%',
        top:'5%',
        center: ['50%', '50%'],
        roseType: 'area',
        label:{
          show:false
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 3,
          borderRadius: [0,0,15,15]
        },
        data: [
          { value: 50, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ],
        silent:true
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize',()=>{
    myChart.resize();
  })
})();