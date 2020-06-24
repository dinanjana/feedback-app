/**
 * Created by dinanjanag on 8/5/19.
 */
import _ from 'lodash';
import { getReviews, deleteReview, saveReview } from '../Repository/Review';
import {
  LOAD_REVIEWS,
  SELECT_REVIEW,
  DELETE_REVIEW,
  SAVE_REVIEW,
  ENTER_REVIEW,
  ENTER_RATING,
  CLEAN_MESSAGES,
} from '../Events';


const loadReviews = (next, initiate = false) => ({
  type: LOAD_REVIEWS,
  payload: getReviews()
    .then(data => ({ next, initiate, data: _.sortBy(data, 'id') }))
    .catch(e => ({error: e})),
});

const enterReview = (body) => ({
  type: ENTER_REVIEW,
  payload: { body },
});

const enterRating = (rating) => ({
  type: ENTER_RATING,
  payload: { rating },
});

const saveReviewInDB = (body, rating) => {
  const isValid = body !== '' && rating !== 0;
  const payload = { type: SAVE_REVIEW, payload: {} };
  if (isValid) {
    payload.payload = saveReview(body, rating);
    return payload;
  } else {
    payload.payload.error = 'Review or rating is empty';
    return payload;
  }
};

const saveAndReloadReviewList = (dispatch, body, rating) => {
  dispatch(saveReviewInDB(body, rating));
  dispatch(loadReviews(false, true))
};

const selectReview = (id) => ({
  type: SELECT_REVIEW,
  payload: {id},
});

const deleteReviewInDB = (id) => ({
  type: DELETE_REVIEW,
  payload: deleteReview(id)
  .then(data => ({ data }))
  .catch(e => ({ error: e })),
});

const deleteReviewAndReload = (dispatch, id) => {
  dispatch(deleteReviewInDB(id));
  dispatch(loadReviews(false, true));
};

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
  deleteReviewAndReload,
  saveAndReloadReviewList,
  cleanMessages,
}

