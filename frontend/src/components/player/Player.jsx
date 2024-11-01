import React from "react";
import ReactPlayer from "react-player";

function Player({ url }) {
  return (
    <div>
      <ReactPlayer
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        onContextMenu={(e) => e.preventDefault()}
        url={url}
        controls={true}
      />
    </div>
  );
}

export default Player;
