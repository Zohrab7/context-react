import * as React from "react";

export const useStore=(rootReducer, state?:any)=> {
    const initialState = state || rootReducer(undefined, { type: undefined });
    return React.useReducer(rootReducer, initialState);
};
