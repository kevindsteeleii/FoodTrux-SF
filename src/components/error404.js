import React from 'react'
/* Component used to let user know it's a no go route */
export default function Error404() {
  return (
    <div id="error-div">
      <p><b>Illegal Link</b> <br/> This route is unavailable. You will be redirected to root route soon...</p>
    </div>
  )
}
