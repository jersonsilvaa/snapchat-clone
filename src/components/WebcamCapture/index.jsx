import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

import { BsCircle } from 'react-icons/bs'

import './styles.scss'

const VideoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

const WebcamCapture = () => {
    const webcamRef = useRef(null)

    const captureCamera = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        console.log(imageSrc)
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