import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(4); 
});

test('adds a new todo', () => {
    render(<TodoList />);
  
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Add Todo' });
  
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
  
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4);
    expect(todoItems[3].textContent).toContain('New Todo');
  });

  test('toggles a todo as completed', () => {
    render(<TodoList />);
  
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
  
    const todoItem = screen.getByRole('listitem', { name: 'Todays List' });
    expect(todoItem).toHaveTextContent('Todays List');
    expect(todoItem).toHaveClass('completed');
  });
  test('deletes a todo', () => {
    render(<TodoList />);
  
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
  
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });