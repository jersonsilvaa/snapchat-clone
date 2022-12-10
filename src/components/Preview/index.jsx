import React from 'react'
import { useSelector } from 'react-redux'
import { selectCameraImage } from '../../features/cameraSlice'

import './styles.scss'

const Preview = () => {
    const cameraImage = useSelector(selectCameraImage)
    return <>
        <div className="preview">
            <h1>Que veo un chad</h1>
            <img src={cameraImage} alt='preview' />
        </div>
    </>
}

export default Preview