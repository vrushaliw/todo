import React from "react"
import PropTypes from "prop-types"

class TodoList extends React.Component {
  render () {
    return (
      <React.Fragment>
        Content: {this.props.todo_list.content}
      </React.Fragment>
    );
  }
};
export {TodoList};
