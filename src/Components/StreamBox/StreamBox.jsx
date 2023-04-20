import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';

const StreamBox = (props) => {
  //   const embed = useRef();
  const [platform, setPlatform] = useState(props.platform);
  //   const handleReady = (e) => {
  //     embed.current = e;
  //   };

  const streamId = useCallback(props.streamId);

  const wMargin = 0;
  const hMargin = 0;
  let height = props.height - hMargin;
  //   let width = (height/9)*16; // adjust for 16:9
  let width = props.width - wMargin;

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      mute:1,
    },
  };
  console.log(props);

  useEffect(() => {
    height = props.height - hMargin;
    width = props.width - wMargin;
    setPlatform(props.platform);
    // opts.heigth = props.height-hMargin;
    // opts.width = props.width-wMargin;
    // width = (height/9)*16;
  }, [props]);

  return (
    <div>
      <YouTube videoId={streamId} opts={opts} />
    </div>
  );
};

export default StreamBox;
