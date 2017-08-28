import Text from './Text'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = { fontSize: 4, m: 0 }

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = { fontSize: 6, m: 0 }

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = { fontSize: 5, m: 0 }

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = { fontSize: 4, m: 0 }

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = { fontSize: 3, m: 0 }

Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = { fontSize: 2, m: 0 }

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = { fontSize: 1, m: 0 }

export default Heading
