import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        toggleTodoStatus(state, action) {
            const { id } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(state, action) {
            const { id } = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        resetTodos(state) {
            state.todos = [];
        },
    },
});


export const { addTodo, toggleTodoStatus, deleteTodo, resetTodos } = todoSlice.actions;

export default todoSlice.reducer;