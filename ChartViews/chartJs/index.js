(function () {
  const titleDom = document.querySelector('#title')
  const yeartitleDom = document.querySelector('#yeartitle')
  titleDom.innerHTML = mzData.RECORDS[0].firstCategory + '抖音行业分析看板'
  let yeartotalGmv = 0
  mzData.RECORDS.forEach(item=>{yeartotalGmv+=Number(item.totalGmv)})
  const endTotalGmv = yeartotalGmv > 100000000 ? Math.round(yeartotalGmv / 1000000) / 100 + "亿" : Math.round(yeartotalGmv / 1000) / 100 + "万"
  yeartitleDom.innerHTML = "2022年至今市场体量为：" + endTotalGmv
})();

(function () {
  const domeId = ['#lefttop','#leftmiddle','#leftbottom']
  barLinePieMixLeft(mzData.RECORDS,secData.RECORDS,domeId,'运动健身行业抖音趋势图')
})();

(function () {
  const chartinstanceD = echarts.init(document.querySelector('#righttop'))
  const chartinstanceE = echarts.init(document.querySelector('#rightmiddle'))
  const thirdDataD = new Array
  const fourDataE = fouData.RECORDS
  thiData.RECORDS.forEach(item=>{
    const thiUseData = new Array
    thiUseData.push(item.pv)
    thiUseData.push(item.totalSales)
    thiUseData.push(item.totalGmv)
    thiUseData.push(item.thirdCategory)
    thirdDataD.push(thiUseData)
  })

  function pltUseData(waitDataA,thiName) {
    let sumNumA = 0
    let sumNumB = 0
    const useDataA = waitDataA.filter(item=>item.thirdCategory == thiName).sort((a,b)=>b.totalGmv-a.totalGmv)
    useDataA.forEach(item=>{
      sumNumA += Number(item.totalGmv)
    })
    useDataA.forEach(item=>{
      sumNumB += Number(item.totalGmv)
      item['pltRatio'] = Math.round(sumNumB / sumNumA * 1000) / 1000
    })
    return useDataA
  }
  const optionF = {
    title: {
      text: '▍市场红蓝海数据(大小为成交金额)',
      left:'0%',
      top:'0%',
      textStyle:{
        fontSize:14,
        fontWeight:'bolder'
      }
    },
    legend: {
      left: 'center',
      top: '3%',
    },
    grid:{
      left:'10%',
      top:'20%',
      right:'10%',
      bottom:'10%'
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
      name:"pv",
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel:{
        formatter:function(value) {
          return Math.round(value / 1000000) / 100 + "亿"
        }
      }
    },
    yAxis: {
      name:"totalSales",
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true,
      axisLabel:{
        formatter:function(value) {
          return Math.round(value / 1000000) / 100 + "亿"
        }
      }
    },
    series: [
      {
        name: '三级类目',
        data: thirdDataD,
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[2]) / 3e3;
        },
        label:{
          show:true,
          color:'black',
          formatter:function(params){
            return Math.round(params.data[2] / 1000000) / 100 + "亿"
          }
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (params) {
              return params.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(251, 118, 123)'
            },
            {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }
          ])
        }
      }
    ]
  };

  const optionG = {
    title:{
      text:'▍瑜伽服饰-品牌帕累托图',
      left:'0%',
      top:'3%',
      textStyle:{
        fontSize:14,
        fontWeight:'bolder'
      }
    },
    legend:{
      type:'plain',
      left:'center',
      top:'3%'
    },
    grid:{
      left:'10%',
      top:'25%',
      right:'10%',
      bottom:'25%'
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
      top:'2%',
      right:'5%'
    },
    xAxis: {
      type: 'category',
      data: pltUseData(fourDataE,'瑜伽服饰').map(item=>item.brandName)
    },
    yAxis: [
      {
        type: 'value',
        name:'brandName',
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
        name:'PTLRatio',
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
    dataZoom:[
      {
        show: true,
        type: 'slider',
        top: '85%',
        start: 0,
        end: 3
      }
    ],
    series: [
      {
        name:'brandName',
        type: 'bar',
        yAxisIndex:0,
        itemStyle:{
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: 'rgb(129, 227, 238)'
            },
            {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }
          ]),
          borderRadius:[33,33,0,0]
        },
        data:pltUseData(fourDataE,'瑜伽服饰').map(item=>item.totalGmv)
      },
      {
        name:'PTLRatio',
        type: 'line',
        yAxisIndex:1,
        data:pltUseData(fourDataE,'瑜伽服饰').map(item=>item.pltRatio),
        smooth:true,
        symbol:"none",
        lineStyle:{
          color:'orange'
        },
        markLine:{
          label:{
            show:true
          },
          data:[
            {
              name: '80%分布',
              yAxis: 0.8
            },
            {
              name: '90%分布',
              yAxis: 0.9
            }
          ]
        }
      },
    ]
  };
  optionF && chartinstanceD.setOption(optionF)
  optionG && chartinstanceE.setOption(optionG)

  chartinstanceD.on('click', function(params) {
    // console.log(params);
    let optionH = {
      title:{
        text:'▍' + params.data[3] + '-品牌帕累托图'
      },
      xAxis: {
        data: pltUseData(fourDataE,params.data[3]).map(item=>item.brandName)
      },
      series: [
        {
          data:pltUseData(fourDataE,params.data[3]).map(item=>item.totalGmv)
        },
        {
          data:pltUseData(fourDataE,params.data[3]).map(item=>item.pltRatio)
        }
      ]
    }
    optionH && chartinstanceE.setOption(optionH);
  });

  window.addEventListener('resize',()=>{
    chartinstanceD.resize();
    chartinstanceE.resize();
  })

})();