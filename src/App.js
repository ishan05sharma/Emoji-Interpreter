import React, { useState } from "react";
import "./styles.css";

var title = "Just emoji things";

const emojiDictionary = {
  "👩": "woman",
  "👨": "Man",
  "🧑": "Person",
  "👧": "Girl",
  "👦": "Boy",
  "🧒": "Child"
};

// var grocery = ['milk', 'eggs', 'apples', 'bananas']

var emojiweknow = Object.keys(emojiDictionary);

// var username = prompt("what's your name");
// var color = "Blue";

export default function App() {
  // const [likecounts, likecounter] = useState(0);
  // function likeclickhandler(){
  //   likecounter(likecounts+1);
  // }
  //<button onClick={likeclickhandler}>
  //    like me
  // </button>
  //{likecounts}
  const [meaning, setmeaning] = useState("");

  function findingmeaning(meaning) {
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    return meaning;
  }

  function inputhandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    setmeaning(findingmeaning(meaning));
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(findingmeaning(meaning));
  }
  // function callbg(index){
  //   if(index%2 !=0){
  //     return "grey"
  //   }
  // }

  return (
    <div className="App">
      <h1>{title}</h1>
      <input onChange={inputhandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know:</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      {/* <ul>
        {grocery.map(function(item, index){
          return <li style={{backgroundColor: callbg(index)}}> {item} </li>
          })
        }
      </ul> */}
    </div>
  );
}

// reactjs.org
// 1. Declerative, Component based, Learn once & write anywhere(many places react is being used)
//JSX - ability to put JS inside html

//Instead of class, it uses classname
//style takes an object
//VISER = view -->interact -->State in event handler -->render*/
