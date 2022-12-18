import { useDispatch, useSelector } from 'react-redux'
import { onCloseModal, onOpenModal } from '../../store/ui/uiSlice';

export const useUiStore = () => {

    const { isModelOpen } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(onOpenModal())
    };

    const closeModal = () => {
        dispatch(onCloseModal())
    }

    return {
        isModelOpen,
        openModal,
        closeModal
    };

};
