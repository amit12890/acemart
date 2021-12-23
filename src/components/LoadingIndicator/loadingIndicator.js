import React from 'react'
import { object, string } from 'prop-types'

import './loader.css'


const LoadingIndicator = props => {
    const { loaderClass, style } = props

    return (
        <div className={`loader_home ${loaderClass}`} style={style} />
    )
}

LoadingIndicator.propTypes = {
    style: object,
    loaderClass: string
}

LoadingIndicator.defaultProps = {
    loaderClass: '',
    style: {}
}

export default LoadingIndicator