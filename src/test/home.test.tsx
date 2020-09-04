import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render} from '@testing-library/react';
import Home from '../pages/home';

test('renders learn react link', () => {
    const {getByText} = render(<Home/>);
    const linkElement = getByText(/riccardo/i);
    expect(linkElement).toBeInTheDocument();
  }
)
