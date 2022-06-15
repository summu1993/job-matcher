import React, { createContext, useReducer, useState, FC } from 'react'
import { JobDetail, WorkerProfile } from '../utils/interfaces'

const WorkerContext = createContext({})
type ComponentProps = React.PropsWithChildren<{}>

const WorkerProvider: FC<ComponentProps> = ({ children }) => {
    
    const [wishlists, setWishlists] = useState<WishlistItemProps[]>([]);


}

export { WorkerProvider, WorkerContext }