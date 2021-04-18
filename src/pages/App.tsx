import React, { FC, useEffect, useRef, useState } from 'react';

import TreeSelector from '../pages/tree/TreeSelector';

// import './App.css';

let modelList: Array<any> = [];
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

const App: FC = props => {
  return <div className="App">app</div>;
};

export default App;
