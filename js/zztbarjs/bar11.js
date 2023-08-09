(function(){
  const chartinstance = echarts.init(document.querySelector('.demo'))
  let useData = new Array
  for (let i=1;i<=5;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  const option = {
    title:{
      show:true,
      text:'▍柱状图类目下钻动画',
      textStyle:{
        fontWeight:'bolder',
        fontSize:25
      },
      top:'3%',
      left:'5%'
    },
    xAxis: {
      data: ['One', 'Two', 'Three', 'Four', 'Five']
    },
    grid:{
      top:'10%'
    },
    yAxis: {},
    dataGroupId: '',
    animationDurationUpdate: 500,
    series: {
      type: 'bar',
      id: 'sales',
      label:{
        show:true,
        fontSize:18,
        position:'top'
      },
      itemStyle:{
        color:'rgb(231, 64, 50)'
      },
      data: [
        {
          value: useData[0],
          groupId: 'One'
        },
        {
          value: useData[1],
          groupId: 'Two'
        },
        {
          value: useData[2],
          groupId: 'Three'
        },
        {
          value: useData[3],
          groupId: 'Four'
        },
        {
          value: useData[4],
          groupId: 'Five'
        }
      ],
      universalTransition: {
        enabled: true,
        divideShape: 'clone'
      }
    }
  };
  const drilldownData = [
    {
      dataGroupId: 'One',
      data: [
        ['OneChild1', 235],
        ['OneChild2', 211],
        ['OneChild3', 156],
        ['OneChild4', 297],
        ['OneChild5', 112]
      ]
    },
    {
      dataGroupId: 'Two',
      data: [
        ['TwoChild1', 135],
        ['TwoChild2', 111],
        ['TwoChild3', 256],
        ['TwoChild4', 97],
        ['TwoChild5', 212]
      ]
    },
    {
      dataGroupId: 'Three',
      data: [
        ['ThreeChild1', 35],
        ['ThreeChild2', 111],
        ['ThreeChild3', 256],
        ['ThreeChild4', 97],
        ['ThreeChild5', 211]
      ]
    },
    {
      dataGroupId: 'Four',
      data: [
        ['FourChild1', 215],
        ['FourChild2', 11],
        ['FourChild3', 56],
        ['FourChild4', 197],
        ['FourChild5', 192]
      ]
    },
    {
      dataGroupId: 'Five',
      data: [
        ['FiveChild1', 85],
        ['FiveChild2', 211],
        ['FiveChild3', 116],
        ['FiveChild4', 207],
        ['FiveChild5', 12]
      ]
    }
  ];
  chartinstance.on('click', function (event) {
    if (event.data) {
      var subData = drilldownData.find(function (data) {
        return data.dataGroupId === event.data.groupId;
      });
      if (!subData) {
        return;
      }
      chartinstance.setOption({
        xAxis: {
          data: subData.data.map(function (item) {
            return item[0];
          })
        },
        series: {
          type: 'bar',
          id: 'sales',
          dataGroupId: subData.dataGroupId,
          data: subData.data.map(function (item) {
            return item[1];
          }),
          universalTransition: {
            enabled: true,
            divideShape: 'clone'
          }
        },
        graphic: [
          {
            type: 'text',
            right: 50,
            top: 20,
            style: {
              text: '返回',
              fontSize: 18
            },
            onclick: function () {
              chartinstance.setOption(option);
            }
          }
        ]
      });
    }
  });
  option && chartinstance.setOption(option);
  window.addEventListener('resize',()=>{
    chartinstance.resize();
  })
})();