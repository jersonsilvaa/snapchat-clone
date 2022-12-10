import React, { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'

import { useDispatch } from 'react-redux'
import { setCameraImage } from '../../features/cameraSlice'
import { BsCircle } from '../../utils/import'

import './styles.scss'

const VideoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

const WebcamCapture = () => {
    const webcamRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const captureCamera = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc))
        navigate('/preview')
    }, [webcamRef])
    return <>
        <div className="webcam__container">
            <Webcam
                ref={webcamRef}
                audio={false}
                width={VideoConstraints.width}
                height={VideoConstraints.height}
                videoConstraints={VideoConstraints}
                screenshotFormat='image/jpeg'
            />

            <BsCircle
                className='webcam__button'
                onClick={captureCamera}
            />
        </div>
    </>
}

export default WebcamCapture