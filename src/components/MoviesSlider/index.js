import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movies, category} = props
  const filteredMovies = movies.filter(movie => movie.categoryId === category)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <h1>{category === 'ACTION' ? 'Action Movies' : 'Comedy Movies'}</h1>
      <div>
        <Slider {...settings}>
          {filteredMovies.map(movie => (
            <MovieItem
              movieImg={movie.thumbnailUrl}
              key={movie.id}
              movieId={movie.id}
              videoUrl={movie.videoUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default MoviesSlider
