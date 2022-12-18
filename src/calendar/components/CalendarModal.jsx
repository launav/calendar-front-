//high order component-> x encima de los otros componentes
//puede envolver otros componentes
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addHours, differenceInSeconds } from 'date-fns';

import es from 'date-fns/locale/es';
registerLocale('es', es);

import './CalendarModal.css';
import { useUiStore } from '../hooks/useUiStore';
import { useCalendarStore } from '../hooks';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')


export const CalendarModal = () => {

  const { isModelOpen, closeModal } = useUiStore()

  const { activeEvent, startSavingEvent } = useCalendarStore()

  const [error, setError] = useState([])

  const [formValues, setFormValues] = useState(
    {
      title: 'título del evento',
      description: 'Descripción del evento',
      start: new Date(),
      end: addHours(new Date(), 2)
    }
  );

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent })
    }
  }, [activeEvent])

  const onCloseModal = () => {
    console.log('cerrando modal');
    closeModal();
  };

  const handleInputChange = ({ target }) => {
    console.log(target)
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const handleDateChange = (date, field) => {
    setFormValues({
      ...formValues,
      [field]: date
    })
    // console.log(date)
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setError([]);

    const difference = differenceInSeconds(formValues.end, formValues.start)//devuelve la dif de tiempo
    // console.log(difference)

    if (isNaN(difference) || difference <= 0 || formValues.title.trim().length <= 0) {

      if (isNaN(difference) || difference <= 0) setError((er) => [...er, 'Las fechas no son correctas'])
      if (formValues.title.trim().length <= 0) setError((er) => [...er, 'Debes escribir el titulo'])

      return
    };

    startSavingEvent(formValues)//se le pasan los datos del evento del form value

    closeModal()
  };


  return (
    <>
      <Modal
        isOpen={isModelOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        className='modal'
        overlayClassName='modal-fondo'
      >

        <h2>Añadir evento</h2>
        <hr />
        <form onSubmit={handleSubmit} className='container' autoComplete='off'>

          <div className='form-group mb-4'>
            <label>Inicio</label>
            <DatePicker
              selected={formValues.start}
              className='form-control'
              dateFormat='Pp'
              locale="es"
              showTimeSelect
              timeCaption='Hora'
              onChange={(date) => handleDateChange(date, 'start')}
            />
          </div>

          <div className='form-group mb-4'>
            <label>Finalización</label>
            <DatePicker
              minDate={formValues.start}
              selected={formValues.end}
              className='form-control'
              dateFormat='Pp'
              locale="es"
              showTimeSelect
              timeCaption='Hora'
              onChange={(date) => handleDateChange(date, 'end')}
            />
          </div>

          <div className='form-group mb-4'>
            <label>Título</label>
            <input
              type="text"
              className='form-control'
              placeholder='Título del evento'
              name='title'
              value={formValues.title}
              onChange={handleInputChange}
            />
          </div>

          <div className='form-group mb-4'>
            <label>Descripción</label>
            <textarea
              type="text"
              className='form-control'
              row='6'
              placeholder='Descripción del evento'
              name='description'
              value={formValues.description}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <ul>
              {
                error.length > 0 && (
                  error.map(er =>
                    <li key={er}>{er}</li>)
                )
              }
            </ul>
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-dark btn-sm'>Guardar</button>
          </div>
        </form>
      </Modal>
    </>
  )
}
