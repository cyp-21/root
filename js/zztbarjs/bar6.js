(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let useData1 = new Array
  let useData2 = new Array
  for (let i=1;i<=12;i++) {
    useData.push(Math.ceil(Math.random()*300))
    useData1.push(Math.ceil(Math.random()*300))
    useData2.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      text:'▍多类目渐变圆角柱状图高亮显示',
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
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        barGap:0,
        showBackground:true,
        itemStyle:{
          color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(26, 142, 240, 1)' },
            { offset: 1, color: 'rgba(26, 142, 240, 0.3)' }
          ]),
          borderRadius:[35,35,0,0]
        },
        data:useData
      },
      {
        name:'CategoryTwo',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        showBackground:true,
        itemStyle:{
          color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(84, 112, 198, 1)' },
            { offset: 1, color: 'rgba(84, 112, 198, 0.3)' }
          ]),
          borderRadius:[35,35,0,0]
        },
        data:useData1
      },
      {
        name:'CategoryThree',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        showBackground:true,
        itemStyle:{
          color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(145, 204, 117, 1)' },
            { offset: 1, color: 'rgba(145, 204, 117, 0.3)' }
          ]),
          borderRadius:[35,35,0,0]
        },
        data:useData2
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();