import React from 'react'

const TaskForm = () => {
    const[formFields, setFormFields] = React.useState({
        title:'',
    });

    const handleChange = evt => setFormFields({...formFields,[evt.target.name]: evt.target.value});

    return (
        <form>
            <section>
                <h2>Add a New Task!</h2>
                <div className='new_task_fields'>
                    <div>
                        <label htmlFor='title'>Task </label>
                        <input
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                            ></input>
                    </div>
                    <button className='button submit_new_task'>Submit</button>
                </div>
            </section>
        </form>
    )
}

export default TaskForm