import React from 'react'
import './TaskForm.css'

const TaskForm = (props) => {
    const[formFields, setFormFields] = React.useState({
        title:'',
        description: '',
    });

    const handleChange = event => setFormFields({...formFields,[event.target.name]: event.target.value});

    const onFormSubmit = event => {
        event.preventDefault();
        props.addTaskCallBack(formFields)
        setFormFields({
            title:'',
            description: '',
        })
    }

    return (
        <form className='add_new_task' onSubmit={onFormSubmit}>
            <section>
                <h2>Add a New Task!</h2>
                <div className='new_task_fields_input'>
                    <div className = 'new_task_fields'>
                        <label htmlFor='title'>Task </label>
                        <input
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                        />
                        <label htmlFor='description'>Description</label>
                        <input
                            name="description"
                            value={formFields.description}
                            onChange={handleChange}
                        />
                    </div>
                    <input className= "new_task_submit_btn"type="submit" value="Submit"/>
                </div>
            </section>
        </form>
    )
}

export default TaskForm