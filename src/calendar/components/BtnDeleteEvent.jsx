import { useCalendarStore, useUiStore } from "../hooks"

export const BtnDeleteEvent = () => {

    const { isModelOpen } = useUiStore();
    const { startDeletingEvent, hasActiveEvent } = useCalendarStore();

    
    const handleDeleteEvent = () => {
        startDeletingEvent();
    };

    return (
        <div className="d-flex justify-content-end">
            <button
                disabled={hasActiveEvent || isModelOpen ? false : true}
                className="btn btn-danger mt-5"
                onClick={handleDeleteEvent}>
                Eliminar
            </button>
        </div>
    )
}
