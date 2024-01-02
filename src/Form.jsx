import React, { useState } from 'react'


function Form() {
  const [objects, setObjects] = useState({
    day: '',
    month: '',
    year: ''
  })


  const [dayError, setDayError] = useState('')
  const [monthError, setMonthError] = useState('')
  const [yearError, setYearError] = useState('')
  const [dayUpdate, setDayUpdate] = useState('- -')
  const [monthUpdate, setMonthUpdate] = useState('- -')
  const [yearUpdate, setYearUpdate] = useState('- -')
  const date = new Date()
  let today = date.getDate()
  let monthly = 1 + date.getMonth()
  let yearly = date.getFullYear()
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let isValid = false


  const validateField = (field, value) => {
    if (!value.trim()) {
      isValid = false
      return `${field} is required!!!`;
    } else if (value > getMaxValueForField(field)) {
      isValid = false
      return `Invalid ${field} value!!!`;
    }
    return '';
  };
  
  const getMaxValueForField = (field) => {
    switch (field) {
      case 'day':
        return 31;
      case 'month':
        return 12;
      case 'year' :
        return yearly
      default:
        return  isValid;
    }
  };
  
  const handleObject = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
  
    setObjects((prevObjects) => ({
      ...prevObjects,
      [name]: value,
    }));
  
    switch (name) {
      case 'day':
        setDayError(error);
        break;
      case 'month':
        setMonthError(error);
        break;
      case 'year':
        setYearError(error);
        break;
      default:
        break;
    }
  };




 const handleSubmit = (e) => {
  e.preventDefault()
  if (!monthError && !dayError&& !yearError ) {
    if (objects.day > today) {
      today = today + months[monthly - 1]
    }
    else if (objects.month > monthly) {
      monthly = monthly + 12
      yearly = yearly - 1
    }

    const d = today - objects.day
    const m = monthly - objects.month
    const y = yearly - objects.year

    setDayUpdate(d)
    setMonthUpdate(m)
    setYearUpdate(y)
  }

  else {
    alert('Fill the forms correctly!!!')
  }
}

  



  return (
    <div className='contain'>
      <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="form">
            <div id="days">
              <label>DAY</label>
              <input type="number" value={objects.day}
                placeholder='DD' maxLength='2'
                onChange={ handleObject }
              
                className='day'
                important
                name='day'
              />
              {dayError && <span id='day'>{dayError}</span>}

            </div>
            <div id="month">
              <label>MONTH</label>
              <input type="number"
                placeholder='MM' maxLength='2'
                value={objects.month}
                onChange={ handleObject }

                className='month'
                important
                name='month'
              />
              {monthError && <span id='months'>{monthError}</span>}

            </div>
            <div id="year">
              <label>YEAR</label>
              <input type="number"
                placeholder='YYYY' maxLength={4}
                value={objects.year}
                onChange={ handleObject }
                className='year'
                important
                minLength='4'
                name='year'
              />
              {yearError && <span id='years'>{yearError}</span>}

            </div>
          </div>
          <div className="divide"></div>
          <button type='submit'
            className='form-btn'
          >
            <img src="./images/icon-arrow.svg"
              alt="" width='50%'
            />
          </button>


        </form>

        {yearUpdate &&
          <h1>
            <span className='y'>
              {yearUpdate}
            </span>
            years
          </h1>}
        {monthUpdate &&
          <h1>
            <span className='m'>
              {monthUpdate}
            </span>
            months
          </h1>}
        {dayUpdate &&
          <h1>
            <span className='d'>
              {dayUpdate}
            </span>
            days
          </h1>}
      </div>
    </div>
  )
}

export default Form