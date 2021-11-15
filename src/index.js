
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, } from 'react-bootstrap'
import { Head } from './head'
import { Middle } from './middle'

function Glavka() {
  const [start, setStart] = useState(false)
  return (
    <Container className='border border-secondary vh-100'>
      <Head
        start={start}
        setStart={setStart}
      />
      <Middle
        start={start}
        setStart={setStart} />
    </Container >
  )
}


ReactDOM.render(<Glavka />, document.getElementById('root'))
