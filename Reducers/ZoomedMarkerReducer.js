export const ZoomedMarkerReducer = (zoomedMarker = [], action) => {
  if (action.type === "MARK") {
    return action.payload;
  }
  return zoomedMarker;
};
