import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import QuoteTitle from './components/QuoteTitle'


function App() {


  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]}


  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

    

  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))  

  const [classNameCard, setClassName] = useState("card")

  const objStyle = {
    backgroundColor: colorRandom,
  }

  const handleClick = () => {
    let animationStatus= 0;
    const a = setInterval(() => {
        if(animationStatus=== 0){
        setClassName(classNameCard + " card-transform")

        }
        if(animationStatus=== 1){
        setClassName(classNameCard + " card-transitionNone")
        
            
        }
        if(animationStatus=== 2){
        setClassName("card")
        setColorRandom(getRandomFromArray(colors))
        setQuoteRandom(getRandomFromArray(quotes))

            
        }
        if(animationStatus=== 3) clearInterval(a)
        animationStatus++

    }, 450)
    
  
}


  return (
    <div className="App" style={objStyle}>

      <QuoteTitle
      colorRandom={colorRandom}
      ></QuoteTitle>

  

      <QuoteBox
      handleClick={handleClick}
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      classNameCard={classNameCard}

      ></QuoteBox>


  
    
    </div>
  )
}

export default App
