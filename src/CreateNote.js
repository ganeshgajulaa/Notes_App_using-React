import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Note from './Note';

const CreateNote = (props) => {

    const [expand, setE] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const AddEvent = () => {
        props.passNote(note);
        return setNote({
            title: '',
            content: '',
        })
    }

    return (
        <>
            <div className='main_note' onDoubleClick={() => { setE(false) }}>
                <form>{expand ?
                    <input type='text' onChange={inputEvent} value={note.title} name="title" placeholder='Title' autoComplete='off' /> : null}
                    
                    <textarea onClick={() => { setE(true) }} row='' columns='' onChange={inputEvent} value={note.content} name="content" placeholder='make a note..' ></textarea>

                    {expand ? <Button onClick={AddEvent}>
                        <AddIcon className='plus_sign'></AddIcon>
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;