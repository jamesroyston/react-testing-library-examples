import React from 'react';
import Clickers from './Clickers';
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react';

afterEach(cleanup);

describe('the clicker component', () => {
    it('displays a count', () => {
        const { getByTestId } = render(<Clickers />);

        expect(getByTestId('count')).toHaveTextContent(0);
    })

    it('increments count', () => {
        const { getByTestId, getByText } = render(<Clickers />);
        fireEvent.click(getByText('UP'));

        expect(getByTestId('count')).toHaveTextContent('1');
    })

    it('decrements count delayed', async () => {
        const { getByTestId, getByText } = render(<Clickers />);
        fireEvent.click(getByText('DOWN'));
        
        const countSpan = await waitForElement(() => {
            return getByText('-1');
        })

        expect(countSpan).toHaveTextContent('-1');
    })
})