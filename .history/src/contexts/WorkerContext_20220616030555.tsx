import React, { createContext, useReducer, useState, FC } from 'react'
import { WishlistItemProps, WishlistFieldProps } from '../utils/interfaces';

const WorkerContext = createContext({})
type ComponentProps = React.PropsWithChildren<{}>

const WorkerProvider: FC<ComponentProps> = ({ children }) => {

}

export { WorkerProvider, WorkerContext }
