// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (<Review review={review}/> )
        }
      )}
    </div>
    )
  }; // end MovieReviews

MovieReviews.defaultProps = {
  reviews: []
}

const Review = ({review}) => {
  return (
    <div className="review">
      <h3>{review.display_title}</h3>
      <h4>{review.headline}</h4>
      <p>by {review.byline}</p>
      <p>Rating: {review.mpaa_rating}</p>
      <img src={review.multimedia.src} alt="something"/>
      <p>Summary: {review.summary_short}</p>
      <a href={review.link.url}>{review.link.suggested_link_text}</a>
    </div>
  )
} // end Review

export default MovieReviews
