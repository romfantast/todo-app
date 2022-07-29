import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import close from '../images/close.png'
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    }, input: {
        marginRight: '1rem',
    }, img: {
        width: '20px', padding: '2px'
    }
}

const TodoItem = ({todo, index, changeItem}) => {
    const {removeKey} =useContext(Context)
    const classesDone = []
    if (todo.completed) {
        classesDone.push('done')
    }

    return (<li style={styles.li}>
            <span className={classesDone.join(' ')}>
                <input checked={todo.completed} onChange={() => changeItem(todo.id)} type="checkbox" style={styles.input}/>
                <b>{index + 1}</b>&nbsp;
                {todo.title}
            </span>
        <div onClick={() => removeKey(todo.id)} ><img src={close} alt="" style={styles.img}/></div>
    </li>);
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired, index: PropTypes.number.isRequired, changeItem: PropTypes.func.isRequired
}

export default TodoItem;