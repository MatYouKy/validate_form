import React from 'react';
import './Word.css';
const Word = props => {
    return(
        <li key={props.id}>
        <p>słowo po angielsku:<b>{props.en}</b> Tłumaczenie po polsku <strong>{props.pl}</strong></p>
      </li>
    );
}
export default Word;