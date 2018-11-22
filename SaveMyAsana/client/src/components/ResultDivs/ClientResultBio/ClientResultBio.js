import React from "react";

const ClientResultBio = props => (
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
    <h5> My Ideal Practice: {props.ideal} </h5>
    <h5> Challenge I am Facing in My Practice: {props.challenge} </h5>
    <h5> Ideal Yoga Practice Environment: {props.environment} </h5>
    <h5> More About My Yoga Journey: {props.journey} </h5>
  </div>
);

export default ClientResultBio;
