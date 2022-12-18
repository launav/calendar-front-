import { useDispatch, useSelector } from 'react-redux'
import { onAddEvent, onDeleteEvent, onEditEvent, onSetActiveEvent } from '../../store/calendar/calendarSlice';

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector((state) => state.calendar);

    const dispatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {//vamos a necesitar pasarle el evento del calendario
        dispatch(onSetActiveEvent(calendarEvent))
    };

    const startSavingEvent = async (calendarEvent) => {

        // TODO: solicitud a la api

        if (calendarEvent._id) {
            // actualizar
            dispatch(onEditEvent({ ...calendarEvent }))
        } else {
            // creando
            dispatch(onAddEvent({ _id: new Date().getTime(), ...calendarEvent }));
        };

    };

    const startDeletingEvent = async () => {
        dispatch(onDeleteEvent());
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        hasActiveEvent: !!activeEvent 
        //para mirar si hay algun evento activo
        //doble negacion si es null me lo llevo a false y si es false a true
    }
}
