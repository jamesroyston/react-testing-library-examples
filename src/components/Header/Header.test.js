import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe.skip("the Header", () => {
    it('renders', () => {
        const { container } = render(<Header text='Hello!' />);
        expect(container).toMatchSnapshot();
    })
    
    it("inserts text in h1", () => {
        const { getByTestId, getByText } = render(<Header text="asdf" />);
        
        expect(getByTestId('h1')).toHaveTextContent('asdf');
        expect(getByText('asdf')).toHaveClass('fancy-h1');
        // toHaveTextContent is a jest-dom assertion, not included in normal jest
        // be mindful of jest-dom vs jest assertions
    })
})