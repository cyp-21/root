function barLinePieMixLeft(data,dataB,domId,charttitle) {
  const chartinstanceA = echarts.init(document.querySelector(domId[0]))
  const chartinstanceB = echarts.init(document.querySelector(domId[1]))
  const chartinstanceC = echarts.init(document.querySelector(domId[2]))
  const optionA = {
    title:{
      text:'▍' + charttitle,
      left:'0%',
      top:'0%',
      textStyle:{
        fontSize:14,
        fontWeight:'bolder'
      }
    },
    legend:{
      type:'plain',
      top:'3%',
      right:'center'
    },
    grid:{
      left:'10%',
      top:'25%',
      right:'10%',
      bottom:'15%'
    },
    tooltip:{
      trigger:'axis',
      formatter:function(params){
        return `${params[0].name}<br/>
        ${params[0].marker} ${params[0].seriesName}：${Math.round(params[0].data / 1000000) / 100}亿<br/>
        ${params[1].marker} ${params[1].seriesName}：${Math.round(params[1].data * 10000) / 100 }%
        `
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {}
      },
      top:'1%',
      right:'3%'
    },
    xAxis: {
      type: 'category',
      data: data.map(item=>item.date)
    },
    yAxis: [
      {
        type: 'value',
        name:'totalGmv',
        position:'left',
        alignTick:true,
        axisLine:{
          show:true
        },
        splitLine:{
          show:false
        },
        axisLabel:{
          formatter:function(value) {
            return Math.round(value / 1000000) / 100 + "亿"
          }
        }
      },
      {
        type: 'value',
        name:'gmvRatio',
        position:'right',
        alignTick:true,
        axisLine:{
          show:true
        },
        splitLine:{
          show:false
        },
        axisLabel:{
          formatter:function(value) {
            return value * 100 + "%"
          }
        }
      }
    ],
    series: [
      {
        name:'totalGmv',
        type: 'bar',
        yAxisIndex:0,
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
          borderRadius:[33,33,0,0]
        },
        data:data.map(item=>Number(item.totalGmv))
      },
      {
        name:'gmvRatio',
        type: 'line',
        yAxisIndex:1,
        data:data.map(item=>Number(item.gmvRatio)),
        smooth:true
      },
    ]
  }
  function pieUseData(targetDate) {
    const arrayData = new Array
    dataB.forEach(item=>{
      if (item.date == targetDate) {
        const objectData = new Object
        objectData['name'] = item.secondCategory
        objectData['value'] = item.totalGmv
        arrayData.push(objectData)
      }
    })
    return arrayData
  }
  const optionB = {
    title:{
      text:'▍2023-07-01',
      left:'0%',
      top:'0%',
      textStyle:{
        fontSize:14,
        fontWeight:'bolder'
      }
    },
    legend: {
      right: 10,
      top: 20,
      bottom: 20,
      type: 'scroll',
      orient:'vertical'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        // dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['30%', '50%'],
        label:{
          show:false,
          position:'center',
          formatter:'{b}\n{d}%'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        labelLine:{
          show:false
        },
        itemStyle: {
          borderRadius: 8
        },
        data: pieUseData('2023-07-01')
      }
    ]
  };
  const optionC = {
    title:{
      text:'▍踏步机/中小型健身器材',
      left:'0%',
      top:'0%',
      textStyle:{
        fontSize:14,
        fontWeight:'bolder'
      }
    },
    legend:{
      type:'plain',
      top:'3%',
      right:'center'
    },
    grid:{
      left:'10%',
      top:'25%',
      right:'10%',
      bottom:'15%'
    },
    tooltip:{
      trigger:'axis',
      formatter:function(params){
        return `${params[0].name}<br/>
        ${params[0].marker} ${params[0].seriesName}：${Math.round(params[0].data / 1000000) / 100}亿<br/>
        ${params[1].marker} ${params[1].seriesName}：${Math.round(params[1].data * 10000) / 100 }%
        `
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {}
      },
      top:'1%',
      right:'3%'
    },
    xAxis: {
      type: 'category',
      data: dataB.filter(item=>item.secondCategory == '踏步机/中小型健身器材').map(item=>item.date)
    },
    yAxis: [
      {
        type: 'value',
        name:'totalGmv',
        position:'left',
        alignTick:true,
        axisLine:{
          show:true
        },
        splitLine:{
          show:false
        },
        axisLabel:{
          formatter:function(value) {
            return Math.round(value / 1000000) / 100 + "亿"
          }
        }
      },
      {
        type: 'value',
        name:'gmvRatio',
        position:'right',
        alignTick:true,
        axisLine:{
          show:true
        },
        splitLine:{
          show:false
        },
        axisLabel:{
          formatter:function(value) {
            return value * 100 + "%"
          }
        }
      }
    ],
    series: [
      {
        name:'totalGmv',
        type: 'bar',
        yAxisIndex:0,
        itemStyle:{
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: 'rgb(33, 193, 217)'
            },
            {
              offset: 1,
              color: 'rgb(117, 132, 254)'
            }
          ]),
          borderRadius:[33,33,0,0]
        },
        data:dataB.filter(item=>item.secondCategory == '踏步机/中小型健身器材').map(item=>Number(item.totalGmv))
      },
      {
        name:'gmvRatio',
        type: 'line',
        yAxisIndex:1,
        data:dataB.filter(item=>item.secondCategory == '踏步机/中小型健身器材').map(item=>Number(item.gmvRatio)),
        smooth:true
      },
    ]
  }
  optionA && chartinstanceA.setOption(optionA)
  optionB && chartinstanceB.setOption(optionB)
  optionC && chartinstanceC.setOption(optionC)

  chartinstanceA.on('click', function(params) {
    let optionD = {
      title:{
        text:'▍' + params.name
      },
      series: [
        {
          data:pieUseData(params.name)
        }
      ]
    }
    optionD && chartinstanceB.setOption(optionD);
  });

  chartinstanceB.on('click', function(params) {
    let optionE = {
      title:{
        text:'▍' + params.name
      },
      series: [
        {
          data:dataB.filter(item=>item.secondCategory == params.name).map(item=>Number(item.totalGmv))
        },
        {
          data:dataB.filter(item=>item.secondCategory == params.name).map(item=>Number(item.gmvRatio))
        }
      ]
    }
    optionE && chartinstanceC.setOption(optionE);
  });

  window.addEventListener('resize',()=>{
    chartinstanceA.resize();
    chartinstanceB.resize();
    chartinstanceC.resize();
  })
}