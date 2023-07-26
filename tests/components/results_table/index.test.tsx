import { render } from '@testing-library/react'

import ResultsTable from '@/components/results_table'

import { mockHeaderInfo } from './fixtures'

it('renders without error', () => {
  expect(() => render(<ResultsTable headerInfo={null} />)).not.toThrow()
})

it('renders nothing when headerInfo is null', () => {
  const { queryByText } = render(<ResultsTable headerInfo={null} />)

  expect(queryByText('RESULTS')).not.toBeInTheDocument()
})

it('renders title', () => {
  const { getByText } = render(<ResultsTable headerInfo={mockHeaderInfo} />)

  expect(getByText('RESULTS')).toBeInTheDocument()
})

it('renders table headers', () => {
  const { getByText } = render(<ResultsTable headerInfo={mockHeaderInfo} />)

  expect(getByText('Header')).toBeInTheDocument()
  expect(getByText('Value')).toBeInTheDocument()
})

it('renders table rows', () => {
  const { getByText } = render(<ResultsTable headerInfo={mockHeaderInfo} />)

  expect(getByText('chunkID')).toBeInTheDocument()
  expect(getByText('chunkSize')).toBeInTheDocument()
  expect(getByText('format')).toBeInTheDocument()
  expect(getByText('numChannels')).toBeInTheDocument()
  expect(getByText('sampleRate')).toBeInTheDocument()
  expect(getByText('byteRate')).toBeInTheDocument()
  expect(getByText('blockAlign')).toBeInTheDocument()
  expect(getByText('bitsPerSample')).toBeInTheDocument()
})
