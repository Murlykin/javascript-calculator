import PropTypes from 'prop-types'

const Display = ({ operation, previous, current }) => {
  return (
    <div
      className='col-span-4 bg-indigo-600 px-2 py-1 text-right font-display border-2'
      id='display'
    >
      <div className='flex h-1/2 items-center justify-end'>
        {previous} {operation}
      </div>
      <div className='flex h-1/2 items-center justify-end'>
        {current}
      </div>
    </div>
  )
}

Display.propTypes = {
  operation: PropTypes.string,
  previous: PropTypes.string,
  current: PropTypes.string
}

export default Display
