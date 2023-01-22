import React from 'react'

const QuoteTitle = ({colorRandom}) => {
    const objStyle = {
        color: colorRandom,
    }

  return (
    <div className='card card__quoteTitle' style={objStyle}>
        <h1>Famous Quotes</h1>
        </div>
  )
}

export default QuoteTitle