import React from 'react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import logo from 'url-loader!./idea.svg'
const height = '50px'

const AddImage = props => <img alt="Add An Idea" {...props} src={logo} height={height} />

export default AddImage
