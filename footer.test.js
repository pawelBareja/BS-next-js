import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import Copyright from "./components/footer/Copyright"

describe("question testing", () => {
  it('renders correct text content', () => {
    const component = render(<Copyright />);
    // expect(component.getByText('Podtytuł ankiety')).toBeInTheDocument();
    expect( screen.getByTestId( 'copyright' ) ).toBeInTheDocument();
  });
});