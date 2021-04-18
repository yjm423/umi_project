import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

var timer1: any;
interface Props {}
interface State {
  option: any;
  dataList: Array<any>;
}
class MapData extends React.Component<Props, State> {
  echartInstance: any;
  echartRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      option: {},
      dataList: [1, 2, 3, 4, 5, 6],
    };
    this.echartInstance = null;
  }

  componentDidMount() {
    this.echartInstance = this.echartRef.getEchartsInstance(); //
    this.getOption();
    timer1 = this.interval();
  }

  componentWillUpdate() {
    // this.getData()
  }

  componentWillUnmount() {
    clearInterval(timer1);
  }

  interval = () => {
    let index = 0;
    let _this = this;
    const { dataList } = this.state;
    return setInterval(function() {
      _this.echartInstance.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index,
        position: 'right',
      });

      index++;
      // console.log(index)
      if (index >= dataList.length) {
        index = 0;
      }
    }, 3000);
  };

  getOption = () => {
    const optionMap = {
      baseOption: {
        backgroundColor: '#080b30',
        timeline: {
          axisType: 'category',
          autoPlay: true,
          width: '6%',
          height: '6%',
          left: 'center',
          playInterval: 10000,
          data: ['1', '2'],
          lineStyle: {
            show: false,
          },
          symbolSize: 8,
          itemStyle: {
            borderWidth: 0,
            color: '#ddd',
          },
          progress: {
            itemStyle: {
              color: '#ddd',
            },
          },
          checkpointStyle: {
            color: '#fff',
            borderWidth: 0,
            symbolSize: 10,
          },
          emphasis: {
            itemStyle: {
              color: '#fff',
              borderWidth: 0,
            },
          },
          label: {
            show: false,
          },
          controlStyle: {
            showPlayBtn: false,
            showPrevBtn: false,
            showNextBtn: false,
          },
        },
        title: {
          text: '多线图',
          align: 'center',
          color: '#fff',
          fontSize: 20,
          top: '5%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          show: true,
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 255, 233,0)',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255,1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 255, 233,0)',
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '15%',
          // containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: '#f00',
              lineStyle: {
                color: '#f00',
              },
            },
            axisLabel: {
              color: '#fff',
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
          },
        ],

        yAxis: [
          {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)',
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 20,
              color: '#d1e6eb',
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 15,
          },
        ],
      },
      options: [
        {
          title: {
            text: '图1',
            textStyle: {
              color: '#fff',
            },
          },
          xAxis: [
            {
              data: ['A', 'B', 'C', 'D', 'E', 'F'],
            },
          ],
          series: [
            {
              lineStyle: {
                color: '#00b3f4',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
              label: {
                show: true,
                position: 'top',
                color: '#00b3f4',
              },
              itemStyle: {
                color: '#00b3f4',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,179,244,0.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,179,244,0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0,179,244, 0.9)',
                shadowBlur: 20,
              },
              data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
            },
          ],
        },
        {
          title: {
            text: '图2',
            textStyle: {
              color: '#fff',
            },
          },
          xAxis: [
            {
              data: ['a', 'b', 'c', 'd', 'e', 'f'],
            },
          ],
          series: [
            {
              lineStyle: {
                color: '#00ca95',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
              label: {
                show: true,
                position: 'top',
                color: '#00ca95',
              },

              itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
              },
              tooltip: {
                show: true,
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,202,149,0.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,202,149,0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0,202,149, 0.9)',
                shadowBlur: 20,
              },
              data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
            },
          ],
        },
      ],
    };

    this.setState({ option: optionMap });
    // return optionXyMap01
  };

  //鼠标移入
  onmouseOver = () => {
    // console.log('移入')
    clearInterval(timer1);
  };

  //鼠标移出
  onmouseOut = () => {
    // console.log('移出')
    timer1 = this.interval();
  };

  render() {
    const { option } = this.state;
    return (
      <ReactEcharts
        ref={e => {
          this.echartRef = e;
        }}
        option={option}
        style={{ height: '100%' }}
        notMerge={true}
        onEvents={{
          mouseover: this.onmouseOver,
          mouseout: this.onmouseOut,
        }}
      />
    );
  }
}

export default MapData;
