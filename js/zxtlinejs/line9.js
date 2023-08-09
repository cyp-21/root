(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  const useData1 = new Array
  const useData2 = new Array
  const useData3 = new Array
  for (let i=1;i<=12;i++) {
    useData1.push(Math.ceil(Math.random()*300))
    useData2.push(Math.ceil(Math.random()*300))
    useData3.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      text:'▍DemoFour',
      left:'5%',
      top:'3%'
    },
    legend:{
      type:'plain',
      top:'3%',
      right:'20%'
    },
    tooltip:{
      trigger:'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {}
      },
      top:'2%',
      right:'5%'
    },
    xAxis: {
      type: 'category',
      data:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'CategoryOne',
        type: 'line',
        smooth:true,
        stack: 'Total',
        areaStyle:{
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(93, 124, 217, 1.0)'
            },
            {
              offset: 1,
              color: 'rgba(156, 197, 201,1.0)'
            }
          ])
        },
        data:useData1
      },
      {
        name:'CategoryTwo',
        type: 'line',
        smooth:true,
        stack: 'Total',
        areaStyle:{
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(230, 120, 20, 1.0)'
            },
            {
              offset: 1,
              color: 'rgba(252, 235, 161,1.0)'
            }
          ])
        },
        data:useData2
      },
      {
        name:'CategoryThree',
        type: 'line',
        smooth:true,
        stack: 'Total',
        areaStyle:{
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(30, 234, 205, 1.0)'
            },
            {
              offset: 1,
              color: 'rgba(251, 233, 233,1.0)'
            }
          ])
        },
        data:useData3
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();