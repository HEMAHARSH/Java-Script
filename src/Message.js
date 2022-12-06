import React from 'react'

export default function Message(props) {
  return (
    <div>
    <h2>Message</h2>
    <h3>Name={props.pop}</h3>
    <h3>Age={props.age}</h3>
    </div>
  )
}
