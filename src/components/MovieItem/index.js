import {useState} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const [showPopup, setShowPopup] = useState(false)
  const {movieImg, videoUrl} = props

  const handlePopup = () => {
    setShowPopup(true)
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <>
      <img
        src={movieImg}
        alt="thumbnail"
        className="img-content"
        onClick={handlePopup}
      />
      <div className="popup-container">
        <Popup
          open={showPopup}
          onClose={handleClose}
          trigger={<div style={{display: 'none'}} />} // Hidden trigger
          className="popup-content"
        >
          {close => (
            <>
              <div>
                <ReactPlayer
                  url={videoUrl}
                  playing
                  controls
                  width="100%"
                  height="80%"
                />
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </>
          )}
        </Popup>
      </div>
    </>
  )
}

export default MovieItem
