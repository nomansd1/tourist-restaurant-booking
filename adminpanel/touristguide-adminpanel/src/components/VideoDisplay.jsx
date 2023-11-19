import React, { useMemo } from "react"
export const VideoDisplay = ({ video }) => {
  return useMemo(() => {
    if (video) {
      return (
        <video
          controls
          width="100"
          height="100"
          src={
            video instanceof File
              ? URL.createObjectURL(video)
              : video
              ? video
              : ""
          }
        ></video>
      )
    }
  }, [video])
}
