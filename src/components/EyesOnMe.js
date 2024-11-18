import React from 'react'

function EyesOnMe() {
    function handleFocus(event) {
        event.preventDefault()
        console.log("Good!")
    }
    function handleBlur(event) {
        event.preventDefault()
        console.log("Hey! Eyes on me!")
    }
  return (
    <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>"Eyes on me"</button>
    </div>
  )
}

export default EyesOnMe