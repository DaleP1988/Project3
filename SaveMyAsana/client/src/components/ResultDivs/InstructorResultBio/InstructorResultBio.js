import React from "react";
import yogitoes from "../../../images/yogitoes.jpg";

const InstructorResultBio = () => (
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div
    className="white center"
    id="search-heading"
    style={{ paddingLeft: "40px", paddingRight: "40px" }}
  >
    <h5 className="center" id="search-title">
      Instructor Biography
    </h5>
    {/* see above */}
    {/* <img src={img} /> */}
    <h5>About the Instructor: Advanced Hot Bikram Yoga </h5>
    <p> Teaching Style: "I teach an athletic and advanced class." </p>
    <p>
      {" "}
      Teaching Background: "I got into yoga when a buddy of mine suggested it
      might help me with my climbing. I was having trouble with stability and
      core strength. He told me yoga had been key to his success in all other
      athletic activities. So I gave it a go. I signed up for teacher training
      hoping to understand it better. I came out of training ready and wanting
      to help others. Haven't looked back!"{" "}
    </p>
    <p>
      {" "}
      Transformative Teaching Experience:"I teach an advanced class in a hot
      room. Its already hard - because Bikram. But I generally let intermediates
      come in. I am always inspired by the people that come in a fight through.
      I had a client come and take childs pose for the entire second half of
      class. I encouraged him to try other classes and work his way up. He came
      back three months later at a higher level than a lot of my regulars. He
      left a huge impression on me and I keep him in my memory bank when I feel
      burnt out on teaching. I learn so much from my students."{" "}
    </p>
    <p> Message to Yogis: "Take 'give up' out of your vocabulary" </p>
    {/* <p> Yogi Wisdom:  </p> */}
    <p>
      {" "}
      My Favorite Yoga Goody:
      <img src={{ yogitoes }} />
    </p>
  </div>
);

export default InstructorResultBio;
