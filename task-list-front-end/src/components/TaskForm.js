import React from 'react'

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
        <form onSubmit={onFormSubmit}>
            <section>
                <h2>Add a New Task!</h2>
                <div className='new_task_fields'>
                    <div>
                        <label htmlFor='title'>Task </label>
                        <input
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                        />
                        <label htmlFor='desctipion'>Description</label>
                        <input
                            name="description"
                            value={formFields.description}
                            onChange={handleChange}
                        />
                    </div>
                    <input type="submit" value="Submit"/>
                </div>
            </section>
        </form>
    )
}

export default TaskForm