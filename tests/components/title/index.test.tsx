import Title from '@/components/title';

import { render } from '@testing-library/react';

const titleWithChildren = () => (
  <Title>
    <h1>test</h1>
  </Title>
);

it('renders without error', () => {
  expect(() => render(titleWithChildren())).not.toThrow();
});

it('renders children', () => {
  const { getByText } = render(titleWithChildren());

  expect(getByText('test')).toBeInTheDocument();
});
