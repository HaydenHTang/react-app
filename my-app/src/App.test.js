import { render, screen } from '@testing-library/react';
import App from './App';
import reducer from './store/reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const store = createStore(reducer);
  render(<Provider store={store}>
      <App /></Provider>)
  const linkElement = screen.getByText(/Number Of User Created/i);
  expect(linkElement).toBeInTheDocument();
});
