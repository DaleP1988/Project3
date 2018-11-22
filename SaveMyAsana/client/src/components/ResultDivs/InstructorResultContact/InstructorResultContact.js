import React from "react";

const InstructorResultContact = props => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="white center" id="search-heading">
    <h5 className="center" id="search-title">
      {/* <img src={omSym}> </img> */}
      CONTACT CONTENT
    </h5>
    {/* see above */}
    <img src={img} />
    <h3>Instructor Name: {props.name} </h3>
    <h3>Instructor Location: {props.loc} </h3>
    <h3>Instructor Phone: {props.phone} </h3>
    <h3>Instructor Email:{props.email} </h3>
  </div>
);

export default InstructorResultContact;
