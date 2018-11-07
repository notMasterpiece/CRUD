import React from 'react';
import PropTypes from 'prop-types';

const TopForm = ({value, onChange, onCreate}) => {
    return (
        <form className='top-form' onSubmit={onCreate} >
            <input className='form-input'
                   type="text"
                   value={value}
                   onChange={onChange}
                   placeholder='...'
            />
            <button type='submit' disabled={value.trim().length <= 0}>Створити новий</button>
        </form>
    );
};

TopForm.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TopForm;
