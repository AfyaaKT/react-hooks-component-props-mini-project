import React from 'react'

const Article = ({preview , title , date = "January 1, 1970" , minutes}) => {
    const renderEmojis = (count, emoji) => Array.from({ length: count }, () => emoji).join('');

    const coffeeCount = minutes < 30 ? Math.ceil(minutes / 5) : 0;
    const bentoCount = minutes >= 30 ? Math.ceil(minutes / 10) : 0;
    
  return (
    <article>
        <h3>{title} </h3>  
        <small>{date} . {renderEmojis(coffeeCount, '☕️')} 
        {renderEmojis(bentoCount, '🍱')} 
         {minutes} min read </small>
        
        <p>{preview}</p>

    </article>
  )
}

export default Article