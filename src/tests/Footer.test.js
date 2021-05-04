import React from "react";
import { render } from '@testing-library/react';
import Footer from "../Components/Footer/Footer";

describe('Footer', () => {
    test('render Footer snapshot', () => {
        const { asFragment } = render(<Footer/>);
        expect(asFragment(<Footer/>)).toMatchSnapshot()
    })
})
