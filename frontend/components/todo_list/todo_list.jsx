import React from 'react';

// import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.todos = this.props.requestTodos();
  }


  render(){
    return(
      <ul>
        {
          this.todos.map(todo => <li>{todo}</li>)
        }
      </ul>
    );
  }
}
