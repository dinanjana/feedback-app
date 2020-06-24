import { connect } from "react-redux";
import React from 'react'
import { saveAndReloadReviewList, enterReview, enterRating } from "../Actions";
import ReviewForm from "../Components/ReviewForm/ReviewForm";

const mapStateToProps = state => ({
  body: state.review.body,
  rating: state.review.rating});

const mapDispatchToProps = dispatch => ({
  saveAndReload: (body, rating) => saveAndReloadReviewList(dispatch, body, rating),
  enterReview: (body) => dispatch(enterReview(body)),
  enterRating: (rating) => dispatch(enterRating(rating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);