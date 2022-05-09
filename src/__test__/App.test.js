import React from 'react';
import { render } from '@testing-library/react'
import App from '../App';

describe('Tests in <App />', ()=>{
    test('Render Component', () => {
        const component = render(<App />);
        expect(component).toMatchSnapshot();
    });
})
