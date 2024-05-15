import React from 'react'

const Right = ({props}) => {

  return (
    <div id="right">
      
      {
      props.map((el)=>(

           
                <div><img src={el.imgSrc} alt=""/>
                <h2>{el.title}</h2>
               <p>{el.description}</p></div>

))
        }
   
 </div>
  )
}

export default Right