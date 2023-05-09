import Foo from '@arvinxu/foo';
import type { FC } from 'react';

const Bar: FC = () => {
  return (
    <div>
      hello Bar!
      <Foo />
    </div>
  );
};

export default Bar;
