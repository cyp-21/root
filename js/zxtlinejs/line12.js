(function(){
  const data = [];
  const data1 = [];
  for (let i = 0; i <= 360; i++) {
    let t = (i / 90) * Math.PI;
    let r = Math.sin(2 * t);
    let m = Math.cos(2 * t)
    data.push([r, i]);
    data1.push([m,i])
  }
  const chartinstance = echarts.init(document.querySelector('.demo'));
  option = {
    title: {
      text: '极坐标花瓣图',
      top:'5%',
      left:'5%',
      textStyle:{
        fontSize:25
      }
    },
    legend: {
      data: ['lineOne','lineTwo'],
      top:'5%'
    },
    polar: {
      center: ['50%', '54%']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    angleAxis: {
      type: 'value',
      startAngle: 0,
      show:false
    },
    radiusAxis: {
      min: 0,
      max:1.1,
      show:false
    },
    series: [
      {
        coordinateSystem: 'polar',
        name: 'lineOne',
        type: 'line',
        showSymbol: false,
        areaStyle:{
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(197, 134, 247, 1.0)'
              },
              {
                offset: 1,
                color: 'rgba(138, 199, 254,1.0)'
              }
            ])
        },
        lineStyle:{
          width:0,
        },
        data: data
      },
      {
        coordinateSystem: 'polar',
        name: 'lineTwo',
        type: 'line',
        showSymbol: false,
        areaStyle:{
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(45, 167, 242, 1.0)'
          },
          {
            offset: 1,
            color: 'rgba(84, 223, 194, 1.0)'
          }
        ])
        },
        lineStyle:{
          width:0,
        },
        data: data1
      }
    ],
    animationDuration: 3000
  };
  option && chartinstance.setOption(option);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();

