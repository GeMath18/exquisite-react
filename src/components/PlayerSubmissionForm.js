import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: '',
  });
  
  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    setFormFields({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: '',

    });
  }
  
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            name="adj1"
            placeholder="adjective1"
            type="text"
            value={formFields.adj1}
            onChange={onInputChange} />

          <input
            name="noun1"
            placeholder="noun1"
            type="text"
            value={formFields.noun1}
            onChange={onInputChange} />

          <input
            name="adverb"
            placeholder="adverb"
            type="text"
            value={formFields.adverb}
            onChange={onInputChange} />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            value={formFields.verb}
            onChange={onInputChange} />

          <input 
            placeholder="adjective2"
            name="adj2"
            type="text"
            value={formFields.adj2}
            onChange={onInputChange} />

          <input 
            placeholder="noun2"
            name="noun2"
            type="text"
            value={formFields.noun2}
            onChange={onInputChange} />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
