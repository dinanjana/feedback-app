import _ from 'lodash';
import {getReviews, saveReview} from '../Repository/Review';
import {
    LOAD_REVIEWS,
    SELECT_REVIEW,
    SAVE_REVIEW,
    ENTER_REVIEW,
    ENTER_RATING,
    ENTER_NAME,
    CLEAN_MESSAGES,
} from '../Events';


const loadReviews = (next, initiate = false) => ({
    type: LOAD_REVIEWS,
    payload: getReviews()
        .then(data => ({next, initiate, data: _.orderBy(data, ['_id'], ['desc'])}))
        .catch(e => ({error: e})),
});

const enterReview = feedback => ({
    type: ENTER_REVIEW,
    payload: {feedback},
});

const enterName = name => ({
    type: ENTER_NAME,
    payload: {name}
});

const enterRating = stars => ({
    type: ENTER_RATING,
    payload: {stars},
});

const saveReviewInDB = (feedback, stars, name) => {
    const isValid = feedback !== '' && stars !== 0 && name !== '';
    const payload = {type: SAVE_REVIEW, payload: {}};
    if (isValid) {
        payload.payload = saveReview(feedback, stars, name);
        return payload;
    } else {
        payload.payload.error = 'Review or name or rating is empty';
        return payload;
    }
};

const saveAndReloadReviewList = (dispatch, feedback, stars, name) => {
    dispatch(saveReviewInDB(feedback, stars, name));
    setTimeout(() => {
        dispatch(loadReviews(false, true));
    }, 1000)
};

const selectReview = (id) => ({
    type: SELECT_REVIEW,
    payload: {id},
});


const cleanMessages = () => ({
    type: CLEAN_MESSAGES,
    payload: {},
});

export {
    loadReviews,
    enterReview,
    enterRating,
    saveReviewInDB,
    selectReview,
    saveAndReloadReviewList,
    cleanMessages,
    enterName
}

