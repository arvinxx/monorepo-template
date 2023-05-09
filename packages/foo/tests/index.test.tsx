import { render } from '@testing-library/react';

import Foo from '@arvinxu/foo';

test('Foo', () => {
  const { container } = render(<Foo />);

  expect(container).toMatchSnapshot();
});
