import React from 'react'
import Quote from './Quote'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quoteRandom,colorRandom,handleClick,classNameCard}) => {




    const objStyle= {
        color: colorRandom,
    }

    const objStyleBtn={
        backgroundColor: colorRandom,
    }




  return (
    <article className={classNameCard} style={objStyle}>
      <i className="card__icon fa-solid fa-quote-left"></i>
    
      <Quote quoteRandom={quoteRandom}></Quote>

      <QuoteButton objStyleBtn={objStyleBtn} handleClick={handleClick}></QuoteButton>
      

    </article>
  )
}

export default QuoteBox