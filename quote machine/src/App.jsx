import React from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div id='quote-box'>
        <h2 id='text'><i class="top_i fa fa-quote-left"></i><span className='text_within'>What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.</span></h2>
        <h5 id='author'>- Bob Dylan</h5>
        <div id='Buttons'>
          <a id='tweet-quote' href="#"> <i class="bott_i fab fa-twitter"></i></a>
          <a id='tumblr-quote' href="#"><i class="bott_i fab fa-tumblr"></i></a>
          <button id="new-quote">New quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
