import {MAX_NUMBER_OF_REVIEWS} from '../Constants';

const getNextIndex = (length, currIndex, initiate = false, next = true) => {
    let index;

    if (initiate) {
        return 0;
    }

    if (next) {
        index = currIndex + MAX_NUMBER_OF_REVIEWS;
        if (index + 1 > length)
            index = currIndex;
    } else {
        index = index === 0 ? 0 : currIndex - MAX_NUMBER_OF_REVIEWS;
    }
    return index;
};

const getCurrentPageNumber = (length, currIndex) => {
    if (currIndex === 0) {
        return 1;
    } else {
        return Math.ceil((currIndex + 1) / MAX_NUMBER_OF_REVIEWS);
    }
};


export {
    getNextIndex,
    getCurrentPageNumber,
}