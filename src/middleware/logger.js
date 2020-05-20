const logger = store => next => action => {
  console.group(action.type);
    console.log('Action: ', action);
    const result = next(action);
    console.log('State: ', store.getState());
  console.groupEnd();

  return result;
};

export default logger;