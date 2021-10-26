import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const { active:note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm( note );
    const { body, title } = formValues;
    
    const activeId = useRef(note.id)
    useEffect(() => {
        if(note.id !== note.current){
            reset( note );
            activeId.current = note.id;
        }

    }, [note, reset]);

    return (
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            placeholder="Awesome day"
            className="notes__title-input"
            name="title"
            value={ title }
            onChange={handleInputChange}
            autoComplete="off"
          />
          <textarea
            placeholder="Whay's on yout mind"
            className="notes__textarea"
            name="body"
            value={ body }
            onChange={handleInputChange}
          ></textarea>
          {
          note.url && (
            <div className="notes__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                alt="imagen"
              />
            </div>
          )}
        </div>
      </div>
    );
}
