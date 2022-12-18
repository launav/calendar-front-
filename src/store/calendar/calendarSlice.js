import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const temporalEvents = {
    _id: new Date().getTime(),
    title: 'titulo desde store',
    description: 'descripcion desde store',
    start: new Date(),
    end: addHours(new Date(), 2),
    user: {
        // _id porq mongo me devuelve el id con el guion bajo
        _id: '1234',
        name: 'usuario'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [temporalEvents],
        activeEvent: null
    },
    reducers: {

        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload
        },
        onAddEvent: (state, { payload }) => {
            state.events.push(payload)
            state.activeEvent = null
        },
        onEditEvent: (state, { payload }) => {
            state.events = state.events.map(ev => {
                if (ev._id === payload._id) {
                    return payload
                } else {
                    return ev
                };
            });
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(ev => ev._id !== state.activeEvent._id)
                state.activeEvent = null
            };
        }
    }
});

export const { onSetActiveEvent, onAddEvent, onEditEvent, onDeleteEvent } = calendarSlice.actions;
