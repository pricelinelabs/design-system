import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import Range from './rc-slider/Range'
import styleSlider from './styleSlider'

const RangeSlider = styleSlider(Range)

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'primary',
}

RangeSlider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default RangeSlider
