import React from 'react'

export const EventBox = ({ event }) => {
    // console.log(event)
    return (
        <>
            <p>{event.title} - <small>{event.user.name}</small></p>
        </>
    )
}
