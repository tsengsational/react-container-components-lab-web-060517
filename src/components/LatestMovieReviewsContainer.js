import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'cb266bc27ff645a181127b63ab80cc92';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: []
    } // end state

  } // end constructor

  componentWillMount(){
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({reviews: reviews.results}))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
       <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

} // end class

export default LatestMovieReviewsContainer
