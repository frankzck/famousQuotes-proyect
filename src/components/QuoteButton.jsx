import React from 'react'

const QuoteButton = ({handleClick,objStyleBtn}) => {
  return (
    <div>
    <button onClick={handleClick} className="card__btn" style={objStyleBtn}>&gt;</button>
    </div>
  )
}

export default QuoteButton