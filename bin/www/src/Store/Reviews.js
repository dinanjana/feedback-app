import {createStore, applyMiddleware} from 'redux';
import {
    LOAD_REVIEWS_FULFILLED,
    SAVE_REVIEW,
    SAVE_REVIEW_FULFILLED,
    SELECT_REVIEW,
    ENTER_REVIEW,
    ENTER_RATING,
    CLEAN_MESSAGES,
    ENTER_NAME
} from '../Events';
import {getNextIndex, getCurrentPageNumber} from '../Logic';
import {MAX_NUMBER_OF_REVIEWS} from '../Constants';
import promise from 'redux-promise-middleware';
import _ from 'lodash';

const initialState = {
    reviewList: [],
    selectedReview: null,
    pagination: {
        total: 0,
        index: 0,
        currentPageNumber: 1,
    },

    review: {
        feedback: '',
        stars: 0,
        name: ''
    },

    message: '',

    error: null,
};

const errorReducer = (state, action) => {
    return _.set(state, 'error', action.payload.error);
};

const reducer = (state = initialState, action) => {
    console.log(`Event fired: ${JSON.stringify(action)}`);

    if (_.has(action, 'payload.error')) {
        switch (action.type) {
            case SAVE_REVIEW: {
                return _.chain(state)
                    .clone()
                    .set('message', action.payload.error)
                    .value();
            }
            default: {
                return errorReducer(state, action);
            }
        }
    }

    switch (action.type) {
        case LOAD_REVIEWS_FULFILLED: {
            let nextIndex = getNextIndex(
                action.payload.data.length, state.pagination.index,
                action.payload.initiate, action.payload.next);
            return {
                reviewList: action.payload.data.slice(
                    nextIndex, nextIndex + MAX_NUMBER_OF_REVIEWS),
                selectedReview: null,
                pagination: {
                    total: action.payload.data.length,
                    index: nextIndex,
                    currentPageNumber: getCurrentPageNumber(
                        action.payload.data.length, nextIndex),
                },
                review: state.review,
                message: state.message,
                error: state.error,
            }
        }

        case ENTER_REVIEW: {
            return _.chain(state)
                .clone()
                .set('review.feedback', action.payload.feedback)
                .value();
        }

        case ENTER_RATING: {
            return _.chain(state)
                .clone()
                .set('review.stars', action.payload.stars)
                .value();
        }

        case ENTER_NAME: {
            return _.chain(state)
                .clone()
                .set('review.name', action.payload.name)
                .value();
        }

        case SAVE_REVIEW_FULFILLED: {
            return _.chain(state)
                .clone(state)
                .set('review.feedback', '')
                .set('review.name', '')
                .set('review.stars', 0)
                .set('message', 'Review saved successfully')
                .value();
        }

        case SELECT_REVIEW: {
            return _.chain(state)
                .clone()
                .set('selectedReview', action.payload.id)
                .value();
        }

        case CLEAN_MESSAGES: {
            return _.chain(state)
                .clone()
                .set('message', '')
                .value();
        }

        default:
            return state;
    }
};

const Reviews = createStore(reducer, initialState, applyMiddleware(promise));

export default Reviews;

