import React from "react";

const ClientResultBio = props => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="white center" id="search-heading">
    <p className="center" id="search-title">
      {/* <img src={omSym}> </img> */}
      Client Bio
    </p>
    {/* see above */}
    {/* <img src={img} /> */}
    <p>
      {" "}
      My Ideal Practice: "At the moment, I am looking for a rigorous practice
      that will get me moving and sweating."
    </p>
    <p>
      {" "}
      Challenge I am Facing in My Practice: "Haven't found an instructor that
      offers the hard class I am looking for. "{" "}
    </p>
    <p>
      {" "}
      Ideal Yoga Practice Environment: I'd like to do in-studio classes. I'd
      prefer to move with a big group -- for motivation.
    </p>
    <p>
      {" "}
      More About My Yoga Journey: I am an intermediate/advanced level yogi who
      has been practicing for over 8 years. I also teach, so I am looking to
      find a challenging instructor who will keep me moving and in shape."
    </p>
  </div>
);

export default ClientResultBio;
