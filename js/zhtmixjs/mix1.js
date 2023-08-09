(function () {
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let minUseData = new Array
  let maxUseData = new Array
  let useData1 = new Array
  let meanData = new Array
  let total = 0
  for (let i=0;i<20;i++) {
    numberData = Math.ceil(Math.random()*300)
    useData.push(numberData)
    total = total + numberData
  }
  let averageData = Math.round(total / 20)
  console.log(total);
  for (let j=0;j<useData.length;j++){
    meanData.push(averageData)
    if ( useData[j] <= averageData ) {
      minUseData.push(Math.abs(useData[j]-averageData))
      maxUseData.push(0)
      useData1.push(useData[j])
    } else {
      minUseData.push(0)
      maxUseData.push(useData[j]-averageData)
      useData1.push(averageData)
    }
  }

  const option = {
    title:{
      text:'▍组合图',
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
      type: 'category',
      data:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'data1',
        type: 'bar',
        stack:'total',
        data:useData1,
        itemStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(117, 132, 255)'
            },
            {
              offset: 1,
              color: 'rgb(177, 187, 255)'
            }
          ])
        }
      },
      {
        name:'max',
        type: 'bar',
        stack:'total',
        data:maxUseData,
        itemStyle: {
          opacity: 0.8,
          borderRadius:[50,50,0,0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 24, 21)'
            },
            {
              offset: 1,
              color: 'rgb(243, 125, 106)'
            }
          ])
        }
      },
      {
        name:'min',
        type: 'bar',
        stack:'total',
        data:minUseData,
        itemStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(34, 183, 93)'
            },
            {
              offset: 1,
              color: 'rgb(194, 214, 155)'
            }
          ])
        }
      },
      {
        name:'useData',
        type: 'line',
        symbol:'circle',
        symbolSize:7,
        data:useData,
        smooth:true,
        lineStyle:{
          color:'rgb(248, 155, 79)',
          width:'3'
        },
        itemStyle:{
          color:'rgb(248, 155, 79)'
        }
      },
      {
        name:'meanData',
        type: 'line',
        symbol:'none',
        data:meanData,
        smooth:true,
        lineStyle:{
          color:'rgb(35, 194, 219)',
          width:'3'
        },
        itemStyle:{
          color:'rgb(35, 194, 219)'
        },
        markPoint:{
          data:[
            {
              name:'平均值',
              type:'average'
            }
          ]
        }
      },
    ]
  }
  option && chartinstance.setOption(option)
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();