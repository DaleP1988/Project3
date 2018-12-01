import React from "react";

const InstructorResultContact = () => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="white center" id="search-heading">
    <h5 className="center" id="search-title">
      {/* <img src={omSym}> </img> */}
      Contact Information
    </h5>
    {/* see above */}
    {/* <img src={img} /> */}
    <p>Instructor Name: Johnny Salke </p>
    <p>Instructor Location: San Luis Obispo, CA </p>
    <p>Instructor Phone: (805) 121 - 5521 </p>
    <p>Instructor Email: JSYoga@gmail.com </p>
  </div>
);

export default InstructorResultContact;
