import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders initial todos', () => {
  render(<TodoList />);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(4); 
});