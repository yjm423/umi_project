import React, { useState } from 'react';
import { Checkbox } from 'antd';
// import { CaretLeftOutlined, CaretDownOutlined } from '@ant-design/icons'

interface ListItem {
  key: string;
  name: string;
  children?: Array<any>;
}

interface IProps {
  list: ListItem[];
  onChange: any;
}

// const TreeNode

const TreeSelector = ({ list, onChange }: IProps) => {
  const [selectedKeyList, setSelectedKeyList] = useState<string[]>([]);

  function handleSelect(checked: boolean, key: string) {
    let list = checked
      ? [...selectedKeyList, key]
      : selectedKeyList.filter(k => k !== key);
    setSelectedKeyList(list);
    onChange(list);
  }

  function getTreeNode(list: ListItem[]): any {
    const openItem = list.find(item => {
      return (
        selectedKeyList.includes(item.key) &&
        Array.isArray(item.children) &&
        item.children.length > 0
      );
    });

    return (
      <div className="list">
        {list.map(item => (
          <Checkbox
            key={item.key}
            onChange={e => handleSelect(e.target.checked, item.key)}
          >
            {item.name}
            {/*Array.isArray(item.children) &&
            item.children.length > 0 &&
            selectedKeyList.includes(item.key) ? (
              <CaretDownOutlined />
            ) : (
              <CaretLeftOutlined />
            )*/}
          </Checkbox>
        ))}

        {openItem &&
          Array.isArray(openItem.children) &&
          getTreeNode(openItem.children)}
      </div>
    );
  }

  return <div className="tree-selector">{getTreeNode(list)}</div>;
};

export default TreeSelector;
