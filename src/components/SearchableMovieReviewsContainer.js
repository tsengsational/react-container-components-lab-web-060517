// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    const reviews = this.state.reviews.filter((review)=>{
      review.display_title.toUpperCase().includes(this.state.searchTerm)
    })
    return(
      <div className="searchable-movie-reviews">
        <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
} // end class

export default SearchableMovieReviewsContainer
