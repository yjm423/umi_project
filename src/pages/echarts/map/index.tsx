import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import mapdata from './data';

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
      dataList: [
        {
          name: '南海诸岛',
          value: 0,
        },
        {
          name: '北京',
          value: 54,
        },
        {
          name: '天津',
          value: 13,
        },
        {
          name: '上海',
          value: 40,
        },
        {
          name: '重庆',
          value: 75,
        },
        {
          name: '河北',
          value: 13,
        },
        {
          name: '河南',
          value: 83,
        },
        {
          name: '云南',
          value: 11,
        },
        {
          name: '辽宁',
          value: 19,
        },
        {
          name: '黑龙江',
          value: 15,
        },
        {
          name: '湖南',
          value: 69,
        },
        {
          name: '安徽',
          value: 60,
        },
        {
          name: '山东',
          value: 39,
        },
        {
          name: '新疆',
          value: 4,
        },
        {
          name: '江苏',
          value: 31,
        },
        {
          name: '浙江',
          value: 104,
        },
        {
          name: '江西',
          value: 36,
        },
        {
          name: '湖北',
          value: 1052,
        },
        {
          name: '广西',
          value: 33,
        },
        {
          name: '甘肃',
          value: 7,
        },
        {
          name: '山西',
          value: 9,
        },
        {
          name: '内蒙古',
          value: 7,
        },
        {
          name: '陕西',
          value: 22,
        },
        {
          name: '吉林',
          value: 4,
        },
        {
          name: '福建',
          value: 18,
        },
        {
          name: '贵州',
          value: 5,
        },
        {
          name: '广东',
          value: 98,
        },
        {
          name: '青海',
          value: 1,
        },
        {
          name: '西藏',
          value: 0,
        },
        {
          name: '四川',
          value: 44,
        },
        {
          name: '宁夏',
          value: 4,
        },
        {
          name: '海南',
          value: 22,
        },
        {
          name: '台湾',
          value: 3,
        },
        {
          name: '香港',
          value: 5,
        },
        {
          name: '澳门',
          value: 5,
        },
      ],
    };
    this.echartInstance = null;
  }

  componentDidMount() {
    this.echartInstance = this.echartRef.getEchartsInstance(); //
    echarts.registerMap('china', mapdata);
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
        type: 'downplay',
        seriesIndex: 0,
      });
      _this.echartInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index,
      });
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
    const { dataList } = this.state;
    const optionMap = {
      tooltip: {
        triggerOn: 'mousemove',
        formatter: function(params: any) {
          var a = '<span>' + params.name + '</span>';
          var b =
            '<span style="color:' +
            'rgba(23, 240, 204)' +
            '">' +
            params.value +
            '%</span>';
          return [a, b].join(' :  ');
        },
        backgroundColor: 'rgba(29, 38, 71)',
        // 额外附加的阴影
        extraCssText: 'box-shadow:0 0 4px rgba(11, 19, 43,0.8);',
      },
      visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ['高', '低'],
        pieces: [
          {
            gt: 100,
            label: '> 100 人',
            color: 'rgba(57, 111, 255)',
          },
          {
            gte: 10,
            lte: 100,
            label: '10 - 100 人',
            color: 'rgba(50, 97, 222)',
          },
          {
            gte: 1,
            lt: 10,
            label: '1 - 9 人',
            color: 'rgba(42, 82, 189)',
          },
          {
            gt: 0,
            lt: 1,
            label: '疑似',
            color: 'rgba(35, 68, 156)',
          },
          {
            value: 0,
            color: 'rgba(27, 53, 122)',
          },
        ],
        show: false,
      },
      geo: {
        map: 'china',
        roam: !1,
        scaleLimit: {
          min: 1,
          max: 2,
        },
        zoom: 1,
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: 'rgba(23, 240, 204)',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0,
          },
        },
        itemStyle: {
          shadowBlur: 1,
          shadowColor: 'rgba(18, 32, 70,0.4)',
          borderColor: 'rgba(18, 32, 70)',
        },
      },
      series: [
        {
          name: '地域分布',
          type: 'map',
          geoIndex: 0,
          data: dataList,
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
