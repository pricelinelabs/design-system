import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import RcSlider from './rc-slider/Slider'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider)

Slider.defaultProps = {
  color: 'primary',
}

Slider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default Slider
