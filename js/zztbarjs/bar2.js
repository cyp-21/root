(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  for (let i=1;i<=12;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      text:'▍圆角阴影柱状图',
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
      data:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve'],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'CategoryOne',
        type: 'bar',
        data:useData,
        showBackground:true,
        backgroundStyle:{
          color:'rgb(127, 230, 238)',
          opacity:0.5
        },
        itemStyle:{
          borderRadius:[35,35,0,0]
        }
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();