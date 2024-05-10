
import { Modal } from "antd"
import "./VideoSection.scss"
import { useState } from "react"
const VideoSection = () => {
    const [playVideo, setPlayVideo] = useState(false)
  return (
    <>
      <div className="video-section">
        <div
          className="video-section-content"
          onClick={() => setPlayVideo(true)}
        >
          <h2 className="video-section-title">Play</h2>
        </div>
        <Modal
          open={playVideo}
          footer={null}
          onCancel={() => setPlayVideo(false)}
          title={null}
          closable={false}
          centered
          className="video-modal"
        >
          <iframe
            src="https://www.youtube.com/embed/_dui6BUmMBg"
            width="100%"
            height="400px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
            className="video-iframe"
          />
        </Modal>
      </div>
    </>
  );
}

export default VideoSection