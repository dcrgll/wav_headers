import Home from '@/pages/index'
import { render, screen } from '@testing-library/react'

it('renders a heading', () => {
  render(<Home />)

  const heading = screen.getByRole('heading', {
    name: /home/i
  })

  expect(heading).toBeInTheDocument()
})
