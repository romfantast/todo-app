import React from "react";
import './App.css';
import TodoList from "./Todo/TodoList";
import {useEffect, useState} from "react";
import Context from "./context";
// import AddTodo from "./AddTodo/AddTodo";
import Spinner from "./Spinner/Spinner";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import("./AddTodo/AddTodo"))

function App() {

    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(backData => {
                console.log(backData)
                setData(backData)
                setSpinner(false)
            })
    }, [])

    const toggleItem = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }

    const removeItem = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const addTodo = (value) => {
        setData(data.concat([{
            title: value,
            id: Date.now(),
            completed: false,
        }]))
    }

    return (
        <Context.Provider value={{removeKey: removeItem}}>
            <div className="wrapper">
                <h1>Todo-app</h1>
                <Modal/>
                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo createTodo={addTodo}/>
                </React.Suspense>

                {(spinner) && <Spinner/>}
                {data.length ? <TodoList todos={data} closeItem={toggleItem}/> : (spinner) ? null : <p>No todos!</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
