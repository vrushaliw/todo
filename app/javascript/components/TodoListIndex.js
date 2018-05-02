import React from "react"
import PropTypes from "prop-types"
import {TodoList} from './TodoList'
class TodoListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_lists: []
    };
  }

  render () {
    var rows = this.state.todo_lists.map(function(todo_list, i) {
          return <TodoList todo_list={todo_list} />;
      }.bind(this));
    return <div>{rows}</div>;
  };
  // on mount, fetch all products and stored them as this component's state
  componentDidMount() {

      this.serverRequest = $.getJSON("http://localhost:3000/todo_lists.json", function (todo_lists) {
          this.setState(() => {
            return {todo_lists: todo_lists}
          });
      }.bind(this));
  };
};

TodoListIndex.defaultProps = {
  todo_lists: []
};
export default TodoListIndex;
