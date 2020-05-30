import React, { FC } from 'react';

import TreeSelector from './TreeSelector';
import './detail.less';
import { Tag } from 'antd';
const modelList = [
  {
    name: '李四',
    key: '0-0',
    children: [
      {
        name: '0-大撒旦法',
        key: '0-0-0',
        children: [
          { name: '0-0-0-0', key: '0-0-0-0' },
          { name: '0-0-0-1', key: '0-0-0-1' },
          { name: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        name: '0-说的1',
        key: '0-0-1',
        children: [
          { name: '0-0-1-0', key: '0-0-1-0' },
          { name: '0-0-1-1', key: '0-0-1-1' },
          { name: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        name: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    name: '0-1',
    key: '0-1',
    children: [
      { name: '0-1-0-0', key: '0-1-0-0' },
      { name: '0-1-0-1', key: '0-1-0-1' },
      { name: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    name: '0-2',
    key: '0-2',
  },
];
function getKeymap() {
  // let result: Array<object> = []
  const keyMap = new Map();
  const _decode = (item: any) => {
    // console.log('item',item)
    keyMap.set(item.key, item);
    Array.isArray(item.children) && item.children.forEach(_decode);
  };
  modelList.forEach(_decode);
  console.log('keymap', keyMap);
  return keyMap;
}
const keyMap = getKeymap();

interface List {
  rows: Array<any>;
  count: number;
}

const detail: FC = () => {
  function handleChange(list: Array<string>): void {
    const nameList = list.map(key => {
      const item = keyMap.get(key);
      // console.log(item.name)
      return item.name;
    });

    console.log(nameList);
  }

  return (
    <div className="App">
      <Tag>1223</Tag>

      {/* <TreeSelector onChange={handleChange} list={modelList} /> */}
    </div>
  );
};

export default detail;
