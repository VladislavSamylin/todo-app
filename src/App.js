import React, {Component} from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            let updatedTodos = prevState.todos.map(item => {
                if (id === item.id) {
                    item.completed = !item.completed;
                }

                return item;
            });

            return {
                todos: updatedTodos
            }
        });
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />);

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }
}

export default App;