import Home from '@/pages/index'
import { render, screen } from '@testing-library/react'

it('renders a heading', () => {
  render(<Home />)

  const heading = screen.getByRole('heading', {
    name: /WAV FILE EXTRACTOR/i
  })

  expect(heading).toBeInTheDocument()
})

it('renders a drag and drop area', () => {
  render(<Home />)

  const dragAndDropArea = screen.getByText(/drag file/i)

  expect(dragAndDropArea).toBeInTheDocument()
})
