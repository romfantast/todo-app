import React from 'react';
import PropTypes from  'prop-types'
import TodoItem from "./TodoItem";

const styles ={
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
}

const TodoList = (props) => {
    return (
        <ul style={styles.ul}>
            { props.todos.map((item, index) => (
                <TodoItem todo={item} key={item.id} index={index} changeItem={props.closeItem}/>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    closeItem: PropTypes.func.isRequired
}

export default TodoList;