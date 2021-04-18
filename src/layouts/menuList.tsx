export interface menuType {
  id: string;
  name: string;
  href: string;
  list?: Array<menuType>;
}
export const menuList = [
  {
    id: 'sub-1',
    name: '图表',
    href: '/echarts',
    list: [
      {
        id: 'item-1-1',
        name: '地图',
        href: '/echarts/map',
      },
      {
        id: 'item-1-2',
        name: '线性图',
        href: '/echarts/axisLine',
      },
      {
        id: 'item-1-3',
        name: 'canvas',
        href: '/echarts/canvas',
      },
    ],
  },
  // {
  //   id:'item-2',
  //   name:'表格',
  //   href:'/table'
  // },
  {
    id: 'sub-3',
    name: '用户',
    href: '/users',
    list: [
      {
        id: 'item-3-1',
        name: '用户1',
        href: '/users/users1',
      },
      // {
      //   id:'item-3-2',
      //   name:'用户2',
      //   href:'/users/users2',
      // }
    ],
  },
  // {
  //   id:'item-4',
  //   name:'hook练习',
  //   href:'/exercise',

  // }
];
