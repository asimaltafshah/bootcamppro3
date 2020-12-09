import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>
        Today we have <span class="App-link">{props.dishName}</span> in main
        serving
      </h1>
      <h1>
        and we have <span class="App-link">{props.sweetdishName}</span> in
        sweetdish
      </h1>
    </div>
  );
}
export default Dinner;
