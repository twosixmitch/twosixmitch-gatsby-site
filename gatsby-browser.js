// custom typefaces

// custom CSS styles
require('./src/assets/scss/main.scss');

//
const React = require('react')
export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}