const noteReducer = (state, action) => {
  
    switch (action.type) {
      case "ADD_NOTES":
        return action.payload.NoteLable !== ""
          ? {
              ...state,
              Lable: [...state.Lable, action.payload],
              Addnotes: [...state.Addnotes, action.payload],
            }
          : { ...state, Addnotes: [...state.Addnotes, action.payload] };


      case "REMOVE_FROM_LABLES":
        const removeLable = state.Lable.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, Lable: removeLable };


      case "REMOVE_FROM_NOTES":
        const removeNotes = state.Addnotes.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, Addnotes: removeNotes };


      case "ADD_TO_ARCHIVE":
        return { ...state, Archive: [...state.Archive, action.payload] };


      case "REMOVE_FROM_ARCHIVE":
        const removeArch = state.Archive.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, Archive: removeArch };


      case "ADD_TO_TRASH":
        return { ...state, Trash: [...state.Trash, action.payload] };


      case "REMOVE_FROM_TRASH":
        const removeTrash = state.Trash.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, Trash: removeTrash };


      default:
        return state;
    }
  };

  export{noteReducer}
