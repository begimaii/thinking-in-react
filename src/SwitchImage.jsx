import React from "react";

export default function SwitchImage({ handleSwitch, showImage }) {
  const lightOn =
    "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png";
  const lightOff =
    "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png";

  return (
    <div
      style={{
        backgroundColor: showImage ? "yellow" : "black",
        height: "100vh",
      }}
    >
      <button onClick={handleSwitch}>{showImage ? "Off" : "On"}</button>
      {showImage ? (
        <img src={lightOn} alt="lightOn" />
      ) : (
        <img src={lightOff} alt="lightOff" />
      )}
    </div>
  );
}

// import React, { Component } from "react";

// export default class SwitchImage extends Component {
//   render() {
//     // const showImage = this.props.image;
//     const { showImage } = this.props;

//     return (
//       <div>
//         <button onClick={this.props.handleSwitch}>
//           {showImage ? "Off" : "On"}
//         </button>
//         {showImage ? (
//           <img
//             src="https://static5.depositphotos.com/1029473/530/i/450/depositphotos_5303607-stock-photo-zen-concept.jpg"
//             alt="frog"
//           />
//         ) : (
//           "There is no image!"
//         )}
//       </div>
//     );
//   }
// }
