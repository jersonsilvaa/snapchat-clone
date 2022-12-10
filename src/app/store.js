import { configureStore } from '@reduxjs/toolkit'

import appSlice from '../features/appSlice'
import cameraSlice from '../features/cameraSlice'

export const store = configureStore({
    reducer: {
        app: appSlice,
        camera: cameraSlice
    }
})