import React from 'react'
import './wrapper.scss'

const Wrapper = props => {
    return (
        <div className='dashboard-wrapper'>
            {props.children}
        </div>
    )
}

export default Wrapper

export const WrapperMain = props => {
    return (
        <div className='dashboard-wrapper__main'>
            {props.children}
        </div>
    )
}

export const WrapperRight = props => {
    return (
        <div className='dashboard-wrapper__right'>
            {props.children}
        </div>
    )
}