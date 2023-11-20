import React, { useState } from 'react'


function Form() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const date = new Date()
  let today = date.getDate()
  let monthly = 1 + date.getMonth()
  let yearly = date.getFullYear()
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let dayCalc = document.querySelector('.day')
  let monthCalc = document.querySelector('.month')
  let yearCalc = document.querySelector('.year')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (dayCalc.value > today) {
      today = today + months[monthly - 1]
    }
    if (monthCalc.value > monthly) {
      monthly = monthly + 12
      yearly = yearly - 1
    }

    const d = today - dayCalc.value
    const m = monthly - monthCalc.value
    const y = yearly - yearCalc.value

    document.querySelector('.y').innerHTML = y
    document.querySelector('.m').innerHTML = m
    document.querySelector('.d').innerHTML = d
  }

  return (
    <div className='contain'>
      <div className="container">
        
        <form onSubmit={handleSubmit}>
        <div className="form">
          <div id="days">
            <label htmlFor="day">DAY</label>
            <input type="number" value={day}
              placeholder='DD' maxLength='2'
              onChange={(e) => setDay(e.target.value)}
              className='day'
              important
            />

          </div>
          <div id="month">
            <label htmlFor="month">MONTH</label>
            <input type="number"
              placeholder='MM' maxLength='2'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className='month'
              important
            />

          </div>
          <div id="year">
            <label htmlFor="year">YEAR</label>
            <input type="number"
              placeholder='YYYY' maxLength='4'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='year'
              important
              minLength='4'
            />

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
       
        <h1><span className='y'>- -</span> years</h1>
        <h1><span className='m'>- -</span> months</h1>
        <h1><span className='d'>- -</span> days</h1>
      </div>
    </div>
  )
}

export default Form