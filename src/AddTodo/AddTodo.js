import React, {useState} from 'react';
import './AddTodo.css'
import PropTypes from "prop-types";


const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    return {
        act: {
            value,
            onChange: (e) => setValue(e.target.value),
        },
        clear: () => setValue(''),
        text: () => value
    }

}

const AddTodo = ({createTodo}) => {

    const input = useInputValue('')

    const formHandler = (e) => {
        e.preventDefault()
        if (input.text().trim()) {
            createTodo(input.text())
            input.clear()
        }
    }

    return (
        <form className="input-group flex-nowrap" action="" style={{marginBottom: '1rem'}} onSubmit={formHandler}>
            <span className="input-group-text" id="addon-wrapping">What to do:</span>
            <input {...input.act} type="text" className="form-control" placeholder="..."
                   aria-label="Username"
                   aria-describedby="addon-wrapping"/>
            <button className='btn btn-primary btn-sm' type='submit'>Add</button>
        </form>
    );
};

AddTodo.propTypes =
    {
        createTodo: PropTypes.func.isRequired,
    }

export default AddTodo;