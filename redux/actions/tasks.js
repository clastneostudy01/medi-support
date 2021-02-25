// 액션 생성 함수

export const addTask = ((payload) => ({
  type: "ADD_TASK",
  payload,
}));

export const unDoneTask = ((payload) => ({
  type: "UNDONE_TASK",
  payload,
}));

export const removeTask = ((payload) => ({
  type: "REMOVE_TASK",
  payload,
}));
