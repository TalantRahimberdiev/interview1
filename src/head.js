import { useState } from 'react'
import { Row, Col, Dropdown, } from 'react-bootstrap'
import { Divide as Hamburger } from 'hamburger-react'
import { languages } from './data'


function Head({ start, setStart }) {
   const [lang, setLang] = useState(0)
   return (
      <Row>
         {
            start ? (
               <Col>
                  <Dropdown>
                     <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        {languages[lang]['label']}
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                        {
                           languages.map((item, index) => {
                              return (
                                 <Dropdown.Item key={item['country']} onClick={() => setLang(index)}>{item['country']}</Dropdown.Item>
                              )
                           })
                        }
                     </Dropdown.Menu>
                  </Dropdown>
               </Col>
            ) : null
         }
         <Col>
            <span onClick={() => start !== true ? setStart(true) : setStart(false)}>
               <Hamburger
                  size={32}
                  direction={'right'}
                  color='mediumseagreen'
                  duration={0.2}
               />
            </span>
         </Col>
      </Row>
   )
}
export { Head }