/**
 * Created by dinanjanag on 8/5/19.
 */
import _ from 'lodash';
import axios from 'axios';
import { BASE_URL } from '../Constants';

const makeReq = async (type, url, body) => {
  try {
    let response;
    switch (type) {
      case 'GET': {
        response = await axios.get(url);
        break;
      } case 'POST': {
        response = await axios.post(url, body);
        break;

      } case 'DELETE': {
        response = await axios.delete(url, body);
        break;
      } default: {
        response = null;
      }
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getReviews = async () => {
  return makeReq('GET', BASE_URL);
};

const deleteReviews = async () => {};

const saveReview = async (body, rating) => {
  const lastId = await getReviews().then(reviews => _.chain(reviews).sortBy('id').last().id);
  return makeReq('POST', BASE_URL, { body, rating, id: lastId + 1 });
};

const deleteReview = async (id) => {
  return makeReq('DELETE', `${BASE_URL}/${id}`);
};

export {
  getReviews,
  deleteReviews,
  saveReview,
  deleteReview,
}
