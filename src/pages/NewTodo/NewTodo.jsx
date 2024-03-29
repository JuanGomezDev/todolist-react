import { useState } from "react";
import { createTodo } from "../../services/todos";
import './newTodo.scss';
import Button from "../../components/Button";


export default function NewTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCreationDateChange = (e) => {
        setCreationDate(e.target.value);
    };

    const handleSave = async () => {
        if (!title || !description || !creationDate) {
            console.log("Campo(s) no llenados");
            return;
        }

        const todo = {
            title: title,
            description: description,
            creationDate: creationDate,
        };

        try {
            const createdTodo = await createTodo(todo);
            console.log('New todo created:', createdTodo);
            alert('TODO created');

            setTitle('')
            setDescription('')
            setCreationDate('')
        } catch (error) {
            console.log('Error creating new todo:', error);
        }
    };


    return (
        <section>
            <h1>NEW TODO</h1>
            <main>
                <label htmlFor="">TODO Title</label>
                <input required type="text" placeholder="TODO title" value={title} onChange={handleTitleChange} />
                <label htmlFor="">TODO Description</label>
                <textarea required className="description" type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
                <label htmlFor="">TODO Creation Time</label>
                <input required type="date" value={creationDate} onChange={handleCreationDateChange} />
            </main>
            <div className="buttons">
                <button className="button-save" onClick={handleSave}>
                    Save
                </button>
                <Button text="TODOs List" path="/"/>
            </div>
        </section>
    )
}
