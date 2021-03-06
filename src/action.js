export const fetchCommonSymptoms = (dispatch) => () => {
  dispatch({
    type: "Common"
  });
};
export const probableDiagnosis = (dispatch) => payload => {
  dispatch({
    type: "PD",
    payload
  });
};
export const diagnose = (dispatch) => payload => {
  dispatch({
    type: "DG",
    payload
  });
};
// export const fetchReportSummary = (dispatch) => payload => {
//   dispatch({
//     type: "RS",
//     payload
//   });
// }