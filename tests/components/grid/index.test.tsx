import Grid from '@/components/grid';
import { render } from '@testing-library/react';

const gridWithChildren = () => (
  <Grid>
    <h1>test</h1>
  </Grid>
);

it('renders without error', () => {
  expect(() => render(gridWithChildren())).not.toThrow();
});

it('renders children', () => {
  const { getByText } = render(gridWithChildren());

  expect(getByText('test')).toBeInTheDocument();
});
