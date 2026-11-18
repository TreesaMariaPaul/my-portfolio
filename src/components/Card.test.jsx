
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from './Card'

describe('Card component', () => {
  it('renders its children correctly', () => {
    render(
      <Card>
        <h2>Education</h2>
        <p>My academic qualifications</p>
      </Card>
    )

    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('My academic qualifications')).toBeInTheDocument()
  })

  it('applies the supplied class name', () => {
    const { container } = render(
      <Card className="professional-card">
        Test content
      </Card>
    )

    expect(container.firstChild).toHaveClass('professional-card')
  })
})
