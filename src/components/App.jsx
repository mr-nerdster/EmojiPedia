import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function creatEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      name={emoji.name}
      img={emoji.emoji}
      mean={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creatEmoji)}</dl>
    </div>
  );
}

export default App;
