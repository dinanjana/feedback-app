import ReviewsList from '../Components/ReviewsList/ReviewsList';
import { connect } from "react-redux";
import React from 'react'
import { selectReview } from "../Actions";

const mapStateToProps = state => ({ reviewList: state.reviewList });
const mapDispatchToProps = dispatch => ({
    select: (id) => dispatch(selectReview(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


