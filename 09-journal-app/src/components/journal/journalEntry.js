import React, { useSelector } from 'react'

export const JournalEntry = () => {
    // const notes = useSelector(state => state.notes)
    return (
        <>
            <div className="journal__entry pointer">
                <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://conceptodefinicion.de/wp-content/uploads/2016/04/Campo.jpg)'
                }}
                >
                </div>
                <div className="journal__entry-body">

                <p className="journal__entry-title"
                >Un nuevo día</p>
                
                <p className="journal__entry-content"
                >Culpa eiusmod ex occaecat laboris.
                </p>
                </div>

                <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
            </div>
        </>
    )
}
