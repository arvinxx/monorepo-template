import { render } from '@testing-library/react';

import Bar from '@arvinxu/bar';

test('Bar', () => {
  const { container } = render(<Bar />);

  expect(container).toMatchSnapshot();
});
