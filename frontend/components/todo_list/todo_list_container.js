import {connect} from 'react-redux';
import {requestTodos, receiveTodos} from '../../actions/todo_actions';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selector';

const mapStateToProps = state => ({
  todos: allTodos(state),
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  receiveTodos: todos => dispatch(receiveTodos(todos)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
