import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './journalEntry';

export const JournalEntries = () => {

    const {notes} = useSelector(state => state.notes) 
    console.log(notes,'Tenemos las notras');
    
    return (
        <>
            <div className="journal__entries">
                {

                notes.map((note) => (
                    <JournalEntry key={note.id}
                    {...note}
                    />

                ))
                
                }

            </div>  
        </>
    )
}
