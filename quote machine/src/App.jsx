import React, { useState } from 'react'
import './App.css'

function App() {

  // Array of quotes with authors
  const quotes = [
    { text: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", author: "Bob Dylan" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
  ];



    // Array of colors
    const colors = [
      "rgb(155, 89, 182)",  // purple
      "rgb(22, 160, 133)",  // green
      "rgb(44, 62, 80)",    // dark blue
      "rgb(115, 168, 87)",  // light green
      "rgb(52, 34, 36)"     // dark brown
    ];
    




  // Generate a random index for the initial state
  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

  // State to keep track of the current quote index
  const [quoteIndex, setQuoteIndex] = useState(getRandomIndex);

  // Function to handle button click and update the quote
  
  
  // This handles the change of qotes on click of the button
  const handleNewQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };




  // The tweet URL
  const tweetUrl = `https://twitter.com/intent/tweet?text="${quotes[quoteIndex].text}" - ${quotes[quoteIndex].author}`;


  // Function to construct the Tumblr share URL
  const tumblrShareUrl = () => {
    const tumblrBaseUrl = "https://www.tumblr.com/widgets/share/tool";
    const tumblrParams = {
      canonicalUrl: window.location.href,
      content: `${quotes[quoteIndex].text} - ${quotes[quoteIndex].author}`,
      posttype: "quote"
    };
    const params = new URLSearchParams(tumblrParams).toString();
    return `${tumblrBaseUrl}?${params}`;
  };




  const theText = (
    <>
      <span className='text_within'>  
        <i class="top_i fa fa-quote-left"></i>
        <span className='main_text'>{quotes[quoteIndex].text}</span>
      </span>
    </>
  );



  // Current background color
  const currentColor = colors[quoteIndex];




  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <div id='quote-box'>
        <h2 id='text' style={{ color: currentColor }}>{theText}</h2>
        <h5 id='author' style={{ color: currentColor }}>- {quotes[quoteIndex].author}</h5>
        <div id='Buttons'>
          <a id='tweet-quote' href={tweetUrl} target="_blank" style={{ backgroundColor: currentColor }}> <i class="bott_i fab fa-twitter"></i></a>
          <a id='tumblr-quote' href={tumblrShareUrl()} target="_blank" style={{ backgroundColor: currentColor }}><i class="bott_i fab fa-tumblr"></i></a>
          <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: currentColor }}>New quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
