import GridCell from '@/components/grid_cell';
import { render } from '@testing-library/react';

const gridCellWithChildren = () => (
  <GridCell>
    <h1>test</h1>
  </GridCell>
);

it('renders without error', () => {
  expect(() => render(gridCellWithChildren())).not.toThrow();
});

it('renders children', () => {
  const { getByText } = render(gridCellWithChildren());

  expect(getByText('test')).toBeInTheDocument();
});
