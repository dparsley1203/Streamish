import React from "react";
import { getVideoSearch } from "../modules/videoManager";

const VideoSearch = ({Videos}) => {



    return (
        <>
            Video Search:
            <input type="text"
                onKeyUp={(event) => getVideoSearch(event.target.value)
                .then((searchResults) => Videos(searchResults))}
                placeholder="Search for a video...">
            </input>

        </>
    )
}

export default VideoSearch;