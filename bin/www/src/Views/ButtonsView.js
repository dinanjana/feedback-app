import ButtonsComp from '../Components/Buttons/DirectionalButtonComp';
import {loadReviews, selectReview} from '../Actions';
import {connect} from "react-redux";
import {MAX_NUMBER_OF_REVIEWS} from '../Constants';
import React from 'react'

const mapStateToProps = state => ({
    page: state.pagination.currentPageNumber,
    total: Math.ceil(state.pagination.total / MAX_NUMBER_OF_REVIEWS),
    backButtonDisabled: state.pagination.currentPageNumber === 1,
});

const mapDispatchToProps = dispatch => ({
    move: (next) => dispatch(loadReviews(next)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsComp);
