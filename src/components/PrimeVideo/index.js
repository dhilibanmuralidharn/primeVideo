import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="slider-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-img"
          />
        </div>
        <div className="sliding-container">
          <MoviesSlider movies={moviesList} category="ACTION" />
          <MoviesSlider movies={moviesList} category="COMEDY" />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
