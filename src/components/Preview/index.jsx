import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { VscChromeClose } from '../../utils/import'
import { resetCameraImage, selectCameraImage } from '../../features/cameraSlice'

import './styles.scss'

const Preview = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cameraImage = useSelector(selectCameraImage)

    useEffect(() => {
        !cameraImage && navigate('/')
    }, [cameraImage, navigate])

    const closePreview = () => {
        dispatch(resetCameraImage())
    }
    return <>
        <div className="preview">
            <VscChromeClose className='preview__close' onClick={closePreview} />
            <img src={cameraImage} alt='preview' />
        </div>
    </>
}

export default Preview