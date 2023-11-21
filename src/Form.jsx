import React, { useState } from 'react'


function Form() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [dayError, setDayError] = useState('')
  const [monthError, setMonthError] = useState('')
  const [yearError, setYearError] = useState('')
  const[dayUpdate, setDayUpdate] = useState('- -')
  const[monthUpdate, setMonthUpdate] = useState('- -')
  const[yearUpdate, setYearUpdate] = useState('- -')
  const date = new Date()
  let today = date.getDate()
  console.log(date.getMonth())
  let monthly = 1 + date.getMonth()
  let yearly = date.getFullYear()
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let isValid = false

  const dayChange = () =>{
    if (day > 31){
        isValid = false
        setDayError('this field is require!!!')
    }
    else{
      setDayError('')
      isValid = true
    }
}

const monthChange = () =>{
  if (month > 12){
    setMonthError('this field is require!!!')
      isValid = false
  }
  else{
    setMonthError('')
    isValid = true
  }
}

const yearChange = () =>{
  if (year > yearly){
    setYearError('this field is require!!!')
      isValid = false
  }
  else{
    setYearError('')
    isValid = true
  }
}

  const handleSubmit = (e) => {
    if(isValid){
    e.preventDefault()
    if (day > today) {
      today = today + months[monthly - 1]
    }
    if (month > monthly) {
      monthly = monthly + 12
      yearly = yearly - 1
    }

    const d = today - day
    const m = monthly - month
    const y = yearly - year

    setDayUpdate(d)
    setMonthUpdate(m)
    setYearUpdate(y)
  }
  else{
    alert('error!!!')
  }
}



  return (
    <div className='contain'>
      <div className="container">
        
        <form onSubmit={handleSubmit}>
        <div className="form">
          <div id="days">
            <label>DAY</label>
            <input type="number" value={day}
              placeholder='DD' maxLength='2'
              onChange={(e) =>{
                dayChange()
                setDay(e.target.value)
              }}
              className='day'
              important
            />
            <span id='day'>{dayError}</span>

          </div>
          <div id="month">
            <label>MONTH</label>
            <input type="number"
              placeholder='MM' maxLength='2'
              value={month}
              onChange={(e) =>{ monthChange() 
                setMonth(e.target.value)}
              }
              className='month'
              important
            />
            <span id='months'>{monthError}</span>

          </div>
          <div id="year">
            <label>YEAR</label>
            <input type="number"
              placeholder='YYYY' maxLength='4'
              value={year}
              onChange={(e) => { yearChange()
                setYear(e.target.value)}
              }
              className='year'
              important
              minLength='4'
            />
            <span id='years'>{yearError}</span>

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
       
        <h1><span className='y'>{dayUpdate}</span> years</h1>
        <h1><span className='m'>{monthUpdate}</span> months</h1>
        <h1><span className='d'>{yearUpdate}</span> days</h1>
      </div>
    </div>
  )
}

export default Form