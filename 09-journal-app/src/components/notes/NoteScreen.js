import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const { active:note } = useSelector(state => state.notes);
    const [formValues, handleInputChange] = useForm( note );
    console.log(formValues, 'los formValues');
    
    const { body, title } = formValues;
    
    console.log( note , 'El active');
    
    return (
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            placeholder="Awesome day"
            className="notes__title-input"
            value={title}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <textarea
            placeholder="Whay's on yout mind"
            className="notes__textarea"
            value={body}
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
