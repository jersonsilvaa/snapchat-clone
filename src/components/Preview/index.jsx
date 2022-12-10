import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCameraImage } from '../../features/cameraSlice'

import './styles.scss'

const Preview = () => {
    const navigate = useNavigate()
    const cameraImage = useSelector(selectCameraImage)

    useEffect(() => {
        !cameraImage && navigate('/')
    }, [cameraImage, navigate])
    return <>
        <div className="preview">
            <h1>Que veo un chad</h1>
            <img src={cameraImage} alt='preview' />
        </div>
    </>
}

export default Preview