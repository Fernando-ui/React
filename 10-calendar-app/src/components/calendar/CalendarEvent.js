import React from 'react'

export const CalendarEvent = ({ event }) => {
    // console.log(event);
    const { title, user } = event;
    
    return (
        <>
            <span>{ title }</span>
            <strong>-{ user.name }</strong>
        </>
    )
}
