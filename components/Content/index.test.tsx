import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Content } from '.'

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<Content />)
  })
  it('text check', () => {
    expect(screen.queryByTestId('text')).toHaveTextContent('welcome to web3 template')
  })
  it('item check', () => {
    expect(screen.queryByTestId('item-1')).toHaveTextContent('Box 1')
    expect(screen.queryByTestId('item-2')).toHaveTextContent('Box 2')
    expect(screen.queryByTestId('item-3')).toHaveTextContent('Box 3')
    expect(screen.queryByTestId('item-4')).toHaveTextContent('Box 4')
    expect(screen.queryByTestId('item-5')).toHaveTextContent('Box 5')
  })
})
