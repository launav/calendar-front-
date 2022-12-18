import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../hooks";

export const BtnAddEvent = () => {

    const { openModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleNewEvent = () => {
        setActiveEvent({
            title: '',
            description: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            user: {
                // _id porq mongo me devuelve el id con el guion bajo
                _id: '1234',
                name: 'usuario'
            }
        });

        openModal();
    };


    return (
        <div className="d-grid">
            <button
                className="btn btn-dark mb-5"
                onClick={handleNewEvent}
            >
                Crear nuevo evento
            </button>
        </div>
    )
}
