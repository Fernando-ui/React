import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothigSelected } from './NothigSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    const { active } = useSelector(state => state.notes);
    console.log(active,'Tenemos el state de jorunal');

    return (
        <div className="journal__main-content">
            <Sidebar
             />

            <main>
                {
                    ( active ) ? ( <NoteScreen/>) : (<NothigSelected/>)
                }
            </main>
        </div>
    )
}
