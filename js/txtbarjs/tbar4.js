(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'));
  const useData = [];
  for (let i = 0; i < 12; i++) {
    useData.push(Math.round(Math.random() * 300));
  }
  const option = {
    title:{
      text:'▍动态数据条形图',
      left:'5%',
      top:'3%'
    },
    legend:{
      show:true,
      type:'plain',
      top:'3%',
      left:'center'
    },
    grid:{
      show:true,
      top:'10%'
    },
    xAxis: {
      type:'value',
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine','Ten','Eleven','Twelve'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 7
    },
    series: [
      {
        realtimeSort: true,
        name: 'categoryOne',
        type: 'bar',
        data: useData,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        },
        itemStyle:{
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: 'rgb(33, 193, 217)'
            },
            {
              offset: 1,
              color: 'rgb(45, 204, 159)'
            }
          ]),
          borderRadius:[0,50,50,0]
        },
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
  function run() {
    for (var i = 0; i < useData.length; ++i) {
      if (Math.random() > 0.9) {
        useData[i] += Math.round(Math.random() * 300);
      } else {
        useData[i] += Math.round(Math.random() * 30);
      }
    }
    chartinstance.setOption({
      series: [
        {
          type: 'bar',
          data:useData
        }
      ]
    });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 3000);
  option && chartinstance.setOption(option);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();

