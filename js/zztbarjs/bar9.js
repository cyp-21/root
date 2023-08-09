(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let useData1 = new Array
  for (let i=1;i<=5;i++) {
    useData.push(Math.ceil(Math.random()*5))
    useData1.push(Math.ceil(Math.random()*5))
  }
  const option = {
    title: [
      {
        text: '▍极坐标柱状图',
        left:'5%',
        top:'3%'
      }
    ],
    polar: {
      radius: [20, '80%']
    },
    angleAxis: {
      max: 6,
      startAngle: 90
    },
    radiusAxis: {
      type: 'category',
      data: ['One', 'Two', 'Three', 'Four', 'Five']
    },
    legend:{
      left:'5%',
      bottom:'5%',
      orient:'vertical'
    },
    tooltip: {},
    series: [{
      type: 'bar',
      name:'One',
      data: useData,
      coordinateSystem: 'polar',
      barGap:0,
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      },
      itemStyle:{
        borderRadius:[0,35,0,35],
        borderColor:'rgb(255, 199, 0)',
        borderWidth:1
      },
      emphasis: {
        focus: 'series',
        blurScope: 'coordinateSystem'
      }
    },
    {
      type: 'bar',
      name:'Two',
      data: useData1,
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      },
      itemStyle:{
        borderRadius:[0,35,0,35],
        borderColor:'rgb(255, 199, 0)',
        borderWidth:1
      },
      emphasis: {
        focus: 'series',
        blurScope: 'coordinateSystem'
      }
    }
    ]
  };
  option && chartinstance.setOption(option);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();