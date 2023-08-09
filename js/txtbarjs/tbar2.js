(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  for (let i=1;i<=12;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      text:'▍排序条形图',
      left:'5%',
      top:'3%'
    },
    legend:{
      type:'plain',
      top:'3%',
      left:'center'
    },
    grid:{
      show:true,
      top:'10%'
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
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve']
    },
    series: [
      {
        name:'CategoryOne',
        type: 'bar',
        label:{
          show:true,
          position:'right'
        },
        itemStyle:{
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: 'rgb(255, 155, 255)'
            },
            {
              offset: 1,
              color: 'rgb(55, 162, 255)'
            }
          ]),
          borderRadius:[0,50,50,0]
        },
        data:useData.sort((a,b)=>a-b)
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();