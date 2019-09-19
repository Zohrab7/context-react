/*
*
*
 configured Store with useStore
*
*
* */

import * as React from "react";
import {useStore} from "./useStore";
import {StoreContext} from "./StoreContext";


export const Store = ({reducers,children}) => {
    return (
        <StoreContext.Provider
            value={useStore(reducers)}>
            {children}
       </StoreContext.Provider>
    );
};

