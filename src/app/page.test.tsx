import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Page />)

    const text = screen.getByText(/Building digital products/i)

    expect(text).toBeInTheDocument()
  })
})
