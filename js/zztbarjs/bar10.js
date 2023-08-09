(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let useData1 = new Array
  for (let i=1;i<=30;i++) {
    useData.push(Math.ceil(Math.random()*300))
    useData1.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      text:'▍多类目圆角阴影柱状图-可缩放',
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
    dataZoom:[
      {
        show: true,
        start: 0,
        end: 80
      },
    ],
    xAxis: {
      type: 'category',
      data:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','thirty'],
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
        data:useData.sort((a,b)=>b-a),
        showBackground:true,
        barGap:0,
        backgroundStyle:{
          color:'rgb(127, 230, 238)',
          opacity:0.5
        },
        itemStyle:{
          color:'rgb(255, 220, 0)',
          borderRadius:[50,50,0,0]
        }
      },
      {
        name:'CategoryTwo',
        type: 'bar',
        data:useData1.sort((a,b)=>b-a),
        showBackground:true,
        backgroundStyle:{
          color:'rgb(127, 230, 238)',
          opacity:0.5
        },
        itemStyle:{
          color:'rgb(28, 191, 117)',
          borderRadius:[50,50,0,0]
        }
      }
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();