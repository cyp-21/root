(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let useData1 = new Array
  let countNum = 1
  const useNumber = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen']
  for (let i=1;i<=18;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  sortData = useData.sort((a,b)=>a-b)
  for (let i=0;i<=17;i++) {
    let useObject = new Object
    useObject['key'] = useNumber[i]
    useObject['value'] = sortData[i]
    useData1.push(useObject)
  }
  const option = {
    title:{
      text:'▍动态排序条形图',
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
      data:useData1.slice(0,10).map(a=>a.key)
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
              color: 'rgb(33, 193, 217)'
            },
            {
              offset: 1,
              color: 'rgb(117, 132, 254)'
            }
          ]),
          borderRadius:[0,50,50,0]
        },
        data:useData1.slice(0,10).map(a=>a.value)
      }
    ]
  }
  option && chartinstance.setOption(option)
  setInterval(()=>{
    if (countNum <= useData1.length-10) {
      let sliceData = useData1.slice(countNum,countNum+10)
      countNum++
      chartinstance.setOption({
        yAxis:{
          data:sliceData.map(a=>a.key)
        },
        series:[{
          data:sliceData.map(a=>a.value)
        }]
      })
    } else {
      countNum = 1
      let sliceData = useData1.slice(0,10)
      chartinstance.setOption({
        yAxis:{
          data:sliceData.map(a=>a.key)
        },
        series:[{
          data:sliceData.map(a=>a.value)
        }]
      })
    }
  },2000);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();