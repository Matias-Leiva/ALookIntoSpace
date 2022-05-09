import React from 'react';
import { render } from '@testing-library/react'
import Rovers from '../../../pages/Rovers/Rovers';

describe('Tests in <Rovers />', () => {

    test('To Match Snapshot', () => {
        const component = render(
            <Rovers />,
        );
        // expect(tree).toMatchSnapshot();

    });
})