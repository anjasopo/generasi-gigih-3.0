import React from 'react';

const PlaylistItem = (props) => {
  return (
    <div className="item">
      <img src={props.imageUrl} alt="Cover" />
      <div className="play">
        <span className="fa fa-play"></span>
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default PlaylistItem;
