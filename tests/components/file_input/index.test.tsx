import FileInput from '@/components/file_input';
import { fireEvent, render } from '@testing-library/react';

it('renders without error', () => {
  expect(() => render(<FileInput setHeaderInfo={jest.fn()} />)).not.toThrow();
});

it('renders title', () => {
  const { getByText } = render(<FileInput setHeaderInfo={jest.fn()} />);

  expect(getByText('WAV FILE EXTRACTOR')).toBeInTheDocument();
});

it('renders drag file text', () => {
  const { getByText } = render(<FileInput setHeaderInfo={jest.fn()} />);

  expect(getByText('DRAG FILE')).toBeInTheDocument();
});

it('renders drop here text when dragging', async () => {
  const { getByTestId, getByText, queryByText } = render(
    <FileInput setHeaderInfo={jest.fn()} />
  );

  const input = getByTestId('file-input');

  fireEvent.dragEnter(input);

  expect(getByText('DROP HERE')).toBeInTheDocument();
  expect(queryByText('DRAG FILE')).not.toBeInTheDocument();

  fireEvent.dragLeave(input);

  expect(queryByText('DROP HERE')).not.toBeInTheDocument();
  expect(getByText('DRAG FILE')).toBeInTheDocument();
});
