import React from "react";

const InstructorResultBio = props => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="white center" id="search-heading">
    <h5 className="center" id="search-title">
      {/* <img src={omSym}> </img> */}
      BIO CONTENT
    </h5>
    {/* see above */}
    <img src={img} />
    <h5>About the Instructor: {props.about} </h5>
    <h5> Teaching Style: {props.style} </h5>
    <h5> Teaching Background: {props.background} </h5>
    <h5> Transformative Teaching Experience:{props.transformative} </h5>
    <h5> Message to Yogis: {props.message} </h5>
    <h5> Yogi Wisdom: {props.wisdom} </h5>
    <h5> My Favorite Yoga Goodie!:{props.goodie} </h5>
  </div>
);

export default InstructorResultBio;
