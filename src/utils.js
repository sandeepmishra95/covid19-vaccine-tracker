import stateWiseDistrictData from './static/stateWiseDistrictData.json';

export const getMinDate = () => {
  const date = new Date();
  return date.toISOString().slice(0, 10);
};

export const getMaxDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  return date.toISOString().slice(0, 10);
};

export const getStates = () => {
  return stateWiseDistrictData.map(({ stateId, stateName }) => {
    return {
      stateId,
      stateName,
    };
  });
};

export const getDistricts = (stateId) => {
  const state = stateWiseDistrictData.find(
    (state) => state.stateId === stateId
  );
  if (state) {
    return state.districts;
  } else {
    return [];
  }
};
