import React from "react";

// HomeBio: [
//     [
//       { type: p, text: "My name is " },
//       { type: span, text: "Ross McIntyre" },
//     ],
//     [
//         {type: p, text: "web developer "},
//         {type: span, text: "/"},
//         {type: p, text: "software engineer"}
//     ]
//   ],

{
  /* <p className="responsive-text"
            </p> */
}

const Bio = ({ bioElements }) => {
    console.log(bioElements)
  return (
    <div className="bio">
        {bioElements}
    </div>
  );
};

export default Bio;
