export const calculateAge = date => {
  return async function(dispatch) {
    let dateObj = new Date();
    let convertedAgeToString = date.toString();
    let sliceConvertedYear = convertedAgeToString.slice(0, 4);
    let sliceConvertedMonth = convertedAgeToString.slice(5, 7);
    let sliceConvertedDay = convertedAgeToString.slice(8, 10);
    let convertYear = dateObj.getFullYear() - sliceConvertedYear;
    let convertMonth = dateObj.getMonth() + 1 - sliceConvertedMonth;
    let convertDay = dateObj.getDate() - sliceConvertedDay;
    dispatch({
      type: "getAge",
      payload: [convertYear, convertMonth, convertDay]
    });
  };
};
