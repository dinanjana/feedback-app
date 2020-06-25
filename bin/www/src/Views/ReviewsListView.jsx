import ReviewsList from '../Components/ReviewsList/ReviewsList';
import {connect} from "react-redux";
import React from 'react'
import {selectReview, deleteReviewAndReload} from "../Actions";

const mapStateToProps = state => ({reviewList: state.reviewList, selected: state.selectedReview});
const mapDispatchToProps = dispatch => ({
    select: (id) => dispatch(selectReview(id)),
    deleteReview: (id) => deleteReviewAndReload(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


