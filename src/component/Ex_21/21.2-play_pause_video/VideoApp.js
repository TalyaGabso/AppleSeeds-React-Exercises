import React, { useState, useEffect, useRef } from "react";

export default () => {
	const videoRef = useRef();

	const playVideo = () => {
    console.log("playVideo :",videoRef.current);
		videoRef.current.play();
	};

	const pauseVideo = () => {
    console.log("pauseVideo: ",videoRef.current);
		videoRef.current.pause();
	};

	return (
		<div>
			<video ref={videoRef} width="550" height="250" controls>
				<source
					src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4"
					type="video/mp4"
				/>
			</video>
			<div>
        <input onClick={playVideo} type="button" value="Play"/>
        <input onClick={pauseVideo} type="button" value="Pause"/>
			</div>
		</div>
	);
};
