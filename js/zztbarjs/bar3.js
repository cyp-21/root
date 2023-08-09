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
      text:'▍多类目柱状图',
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
        data:useData
      },
      {
        name:'CategoryTwo',
        type: 'bar',
        data:useData1
      },
      {
        name:'CategoryThree',
        type: 'bar',
        data:useData2
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();