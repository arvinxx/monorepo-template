import React from 'react';
import type { FC } from 'react';
import Foo from '@arvinxu/foo';

const Bar: FC = () => {
  return (
    <div>
      hello Bar!
      <Foo />
    </div>
  );
};

export default Bar;
