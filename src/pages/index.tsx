import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <div>
        <Link to="/">home</Link>&nbsp;
        <Link to="/user">user</Link>
        <Link to="/detail">detail</Link>
      </div>
    </div>
  );
};
