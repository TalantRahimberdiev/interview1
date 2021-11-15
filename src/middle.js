import { useState, useEffect } from 'react'
import { data } from './data'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'


function Middle({ start }) {
   const [chapter, setChapter] = useState(undefined)
   const [subchapter, setSubchapter] = useState(undefined)

   useEffect(() => {
      setChapter(undefined)
      setSubchapter(undefined)
   }, [start])
   return (
      <>
         {
            start !== false && chapter == undefined ? (
               data.map((item, index) => {
                  return (
                     <h3 key={item['razdel']['name']} onClick={() => setChapter(index)}>{item['razdel']['name']}<GoArrowRight /></h3>
                  )
               })
            ) : null
         }
         {
            start !== false && chapter !== undefined && subchapter == undefined ? (
               <>
                  <h3 onClick={() => setChapter(undefined)}><GoArrowLeft />{data[chapter]['razdel']['name']}</h3>
                  <hr></hr>
                  {
                     data[chapter]['razdel']['podrazdelenia'].map((element, i) => {
                        return (
                           <p key={element['podrazdel']['name']} onClick={() => setSubchapter(i)}>{element['podrazdel']['name']}</p>
                        )
                     })
                  }
               </>
            ) : null
         }
         {
            start !== false && chapter !== undefined && subchapter !== undefined ? (
               <>
                  <h3 onClick={() => setSubchapter(undefined)}><GoArrowLeft />{data[chapter]['razdel']['podrazdelenia'][subchapter]['podrazdel']['name']}</h3>
                  <hr></hr>
                  {
                     data[chapter]['razdel']['podrazdelenia'][subchapter]['podrazdel']['info'].map((el, ind) => {
                        return (
                           <>
                              <h5 key={el['title'] + ind}>{el['title']}</h5>
                              <p key={el['description']}>{el['description']}</p>
                           </>
                        )
                     })
                  }
               </>
            ) : null
         }
      </>
   )
}


export { Middle }