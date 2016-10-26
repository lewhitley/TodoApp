export const allTodos = (state) => {
  const ids = Object.keys(state.todos) ;
  const todos = ids.map( id => state.todos[id] );
  return todos;
};
