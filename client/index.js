import React from 'react'
import { render } from 'react-dom'
import { onPageLoad } from 'meteor/server-render'
import App from '/imports/routes/router'


Meteor.startup(() => {
  onPageLoad(async sink => {
    render(
      <App />,
      document.getElementById('root')
    )
  })
})