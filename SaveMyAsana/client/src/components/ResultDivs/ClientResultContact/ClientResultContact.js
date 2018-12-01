import React from "react";

const ClientResultContact = props => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="white center" id="search-heading">
    <h5 className="center" id="search-title">
      {/* <img src={omSym}> </img> */}
      Client Contact Information
    </h5>
    {/* see above */}
    {/* <img src={img} /> */}
    <p>Client Name: Dale Padelford </p>
    <p>Client Location: Paso Robles, CA </p>
    <p>Client Phone: (310) 555 - 7777 </p>
    <p>Client Email: yogiGirl@gmail.com </p>
  </div>
);

export default ClientResultContact;
