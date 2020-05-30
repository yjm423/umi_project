import React, { FC } from 'react';

import TreeSelector from './components/TreeSelector';

import MOCK from './mock';
import './App.css';

const { modelList } = MOCK;

function getKeymap() {
  // let result: Array<object> = []
  const keyMap = new Map();
  const _decode = (item: any) => {
    keyMap.set(item.key, item);
    Array.isArray(item.children) && item.children.forEach(_decode);
  };
  modelList.forEach(_decode);
  return keyMap;
}
const keyMap = getKeymap();

interface List {
  rows: Array<any>;
  count: number;
}

const App: FC = () => {
  function handleChange(list: Array<string>): void {
    const nameList = list.map(key => {
      const item = keyMap.get(key);
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

export default App;
