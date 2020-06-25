import {connect} from "react-redux";
import React from 'react'
import {saveAndReloadReviewList, enterReview, enterRating, enterName} from "../Actions";
import ReviewForm from "../Components/ReviewForm/ReviewForm";

const mapStateToProps = state => ({
    feedback: state.review.feedback,
    stars: state.review.stars,
    name: state.review.name
});

const mapDispatchToProps = dispatch => ({
    saveAndReload: (feedback, stars, name) => saveAndReloadReviewList(dispatch, feedback, stars, name),
    enterReview: feedback => dispatch(enterReview(feedback)),
    enterRating: stars => dispatch(enterRating(stars)),
    enterName: name => dispatch(enterName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);