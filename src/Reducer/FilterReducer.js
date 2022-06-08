const filterFun = (state, action) => {
    switch (action.type) {
      case "LOW":
        return { ...state, byPriority: action.payload };

      case "HIGH":
        return { ...state, byPriority: action.payload };

      case "SORT_BY_DATE":
        return { ...state, byDate: action.payload };

      case "CLEAR":
        return { byPriority: "", byDate: "" };
      default:
        return state;
    }
}
export{filterFun};