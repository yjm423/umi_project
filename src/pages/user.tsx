import React, { FC } from 'react';

import TreeSelector from './TreeSelector';

// import MOCK from './mock'

// import './App.css'

// const { modelList } = MOCK

const modelList = [
  {
    name: '222',
    key: '0-0',

    children: [
      {
        name: '222',
        key: '0-0-0',
      },

      {
        name: '0-0-33',

        key: '0-0-55',
        children: [
          { name: '0-0-1-0', key: '0-0-1-50' },
          { name: '0-0-1-1', key: '0-0-1-61' },
          { name: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        name: '0-0-22',
        key: '0-0-2',
      },
    ],
  },
  {
    name: '0-1',
    key: '0-1',
    children: [
      { name: '0-1-0-01', key: '0-1-0-0' },
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

const user: FC = () => {
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
      <TreeSelector onChange={handleChange} list={modelList} />
    </div>
  );
};

export default user;
