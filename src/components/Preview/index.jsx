import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { VscChromeClose, MdOutlineTextFields, MdCreate, BsMusicNote, FaStickyNote, IoMdAttach, BiCrop, MdTimer } from '../../utils/import'
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
        <div className='preview'>
            <VscChromeClose className='preview__close' onClick={closePreview} />
            <div className='preview__toolbarRight'>
                <MdOutlineTextFields className='svg_icons' />
                <MdCreate className='svg_icons' />
                <FaStickyNote className='svg_icons' />
                <BsMusicNote className='svg_icons' />
                <IoMdAttach className='svg_icons' />
                <BiCrop className='svg_icons' />
                <MdTimer className='svg_icons' />
            </div>
            <img src={cameraImage} alt='preview' />
        </div>
    </>
}

export default Preview