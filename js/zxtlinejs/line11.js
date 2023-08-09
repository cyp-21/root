(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'));
  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 50 - 25;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }
  let data = [];
  let now = new Date(2022, 7, 21);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 600;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  let option = {
    title: {
      text: 'Demo'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' : ' +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 1000
    }],
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: data
      }
    ]
  };
  setInterval(function () {
    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }
    chartinstance.setOption({
      series: [
        {
          data: data
        }
      ]
    });
  }, 1000);
  
  option && chartinstance.setOption(option);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();



