import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// * Hacemos referencia a nuestro componente div inicial
Modal.setAppElement("#root");
const now = moment().minutes(0).seconds(0).add(1,'hours');

// ? Anadiendo una hora mas a la hora actual
const nowPlus1 = now.clone().add(1, 'hours');


export const CalendarModal = () => {
  const [dateStart, setdateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const closeModal = () => {};
  const handleStartDateChange = (e) => {
    setdateStart(e);
    setFormValues({
      ...formValues,
      start:e
    })
    console.log(e);
  };
  const handleEndDateChange = (e) => {
    setDateEnd(e);
    console.log(e);
    setFormValues({
      ...formValues,
      end:e
    })
  };
  const [formValues, setFormValues] = useState({
    title:'Evento',
    notes:'',
    start:now.toDate(),
    end:nowPlus1.toDate(),
  });

  const { notes, title } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value

    })
  };
  const handleSubmitForm = (e) => {
      e.preventDefault();
      console.log(formValues);
  }

  return (
    <>
      <Modal
        // ? isOpen Nos permitira si se muestra o no el modal: bool
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> Nuevo evento </h1>
        <hr />
        <form 
        className="container"
        onSubmit = { handleSubmitForm }
        >
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              onChange={handleStartDateChange}
              value={dateStart}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              onChange={handleEndDateChange}
              value={dateEnd}
              className="form-control"
              //? Podemos colocar fechas minimas a escoger
              minDate={dateStart}
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input type="text" 
            className="fotm-control"
            placehoolder="Titulo del evento"
            name="title"
            autoComplete="off"
            value={ title }
            onChange ={ handleInputChange }
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              value={ notes }
              onChange = { handleInputChange }
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </>
  );
};
