(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useName = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve']
  let useData = new Array
  let totalNum = 0
  for (let i=0;i<12;i++) {
    let useObj = new Object
    useObj['key'] = useName[i]
    let useNum = Math.ceil(Math.random()*300)
    useObj['value'] = useNum
    totalNum = totalNum + useNum
    useData.push(useObj)
  }
  let sortData = useData.sort((a,b) => b.value - a.value)
  let sumNum = 0
  for (let i=0;i<sortData.length;i++) {
    sumNum = sortData[i].value + sumNum
    sortData[i]['Pltnum'] = Math.round((sumNum / totalNum) * 100)
  }
  const option = {
    title:{
      text:'▍帕累托图',
      left:'50%',
      top:'3%'
    },
    legend:{
      type:'plain',
      top:'3%',
      right:'20%'
    },
    tooltip:{
      trigger:'axis',
      formatter:'{b}<br />{a0}: ${c0}<br />{a1}: {c1}%'
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
      data: sortData.map(a => a.key)
    },
    yAxis: [
      {
        type: 'value',
        name:'CategoryOne',
        position:'left',
        alignTick:true,
        axisLine:{
          show:true
        },
        axisLabel:{
          formatter:'${value}'
        }
      },
      {
        type: 'value',
        name:'PTL',
        position:'right',
        alignTick:true,
        axisLine:{
          show:true
        },
        axisLabel:{
          formatter:'{value}%'
        }
      }
    ],
    series: [
      {
        name:'CategoryOne',
        type: 'bar',
        yAxisIndex:0,
        data:sortData.map(a=>a.value)
      },
      {
        name:'PTL',
        type: 'line',
        yAxisIndex:1,
        data:sortData.map(a=>a.Pltnum),
        smooth:true,
        markLine:{
          label:{
            show:true
          },
          data:[
            {
              name: '80%分布',
              yAxis: 80
            },
            {
              name: '90%分布',
              yAxis: 90
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