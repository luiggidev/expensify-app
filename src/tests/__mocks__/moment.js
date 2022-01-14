// using jest.requireActual to fetch the actual library to avoid stack Overflow error
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};