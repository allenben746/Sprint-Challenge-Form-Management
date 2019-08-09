import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<UserForm />', () => {

it('renders without crashing', () => {
  render(<UserForm />);
})

it('renders <h1>User Sign-Up Sprint Challenge</h1>', () => {
    

  const app = render(<UserForm />)

  app.getByText('User Sign-Up Sprint Challenge')
})

it("errors work", () => {
  
    const { container } = render(<UserForm />);
    const submitButton = getByTestId(container, "submitButton");
    fireEvent.click(submitButton);
  });
});
