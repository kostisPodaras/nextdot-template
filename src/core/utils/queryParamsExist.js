const queryParamsExist = (...params) =>
  params.some((param) => global.location.search.includes(param));

export default queryParamsExist;
