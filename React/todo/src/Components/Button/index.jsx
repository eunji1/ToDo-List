import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
  return (
    <div>index</div>
  )
}

index.propTypes = {
    content: PropTypes.string.isRequired
}

export default index