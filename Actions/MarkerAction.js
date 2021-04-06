export const MarkerAction = (mark) => {
  return {
    type: "MARK",
    payload: {
      mark: mark,
    },
  };
};
