(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  let useData1 = new Array
  let countNum = 1
  const useNumber = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen']
  for (let i=1;i<=18;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  sortData = useData.sort((a,b)=>b-a)
  for (let i=0;i<=17;i++) {
    let useObject = new Object
    useObject['key'] = useNumber[i]
    useObject['value'] = sortData[i]
    useData1.push(useObject)
  }
  const option = {
    title:{
      text:'▍圆角阴影渐变动态柱状图-判断值范围',
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
      axisTick: {
        alignWithLabel: true
      },
      data:useData1.slice(0,10).map(a=>a.key)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'CategoryOne',
        type: 'bar',
        showBackground:true,
        backgroundStyle:{
          color:'rgb(182, 232, 243)',
          opacity:0.7
        },
        itemStyle:{
          borderRadius:[50,50,0,0],
          color: arg =>{
            if (arg.value >= 200) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(244, 28, 46, 1)' },
                { offset: 1, color: 'rgba(255,255,255,0.5)' }
              ])
            }else if (arg.value >= 100) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(16, 124, 65, 1)' },
                { offset: 1, color: 'rgba(255,255,255,0.5)' }
              ])
            }else if (arg.value >= 0) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(217, 197, 25, 1)' },
                { offset: 1, color: 'rgba(255,255,255,0.5)' }
              ])
            }
          }
          
        },
        data:useData1.slice(0,10).map(a=>a.value)
      }
    ]
  }
  option && chartinstance.setOption(option);
  setInterval(()=>{
    if (countNum <= useData1.length-10) {
      let sliceData = useData1.slice(countNum,countNum+10)
      countNum++
      chartinstance.setOption({
        xAxis:{
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
        xAxis:{
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