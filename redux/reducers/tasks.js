const tasks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK_SUCCEEDED":
      console.log("--ADD_TASK_SUCCEEDED--");
      // console.log(...state, { ...action.payload });
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case "UNDONE_TASK_SUCCEEDED":
      console.log("--UNDONE_TASK_SUCCEEDED--");
      console.log(action.payload);
      return state.map((item) => {
        if (
          item.date == action.payload.date &&
          item.time == action.payload.time &&
          item.type == action.payload.type
        ) {
          item.isTrue = 0;

          console.log("--exist item--");
          return item;
        } else {
          return item;
        }
      });
    case "FETCH_TASKS_SUCCEEDED":
      console.log("FETCH_TASKS_SUCCEEDED");
      // console.log([...action.payload]);
      return [...action.payload];

    case "REMOVE_TASK":
      return [...state.filter((item) => item.id != action.payload)];
    default:
      return state;
  }
};

export default tasks;
