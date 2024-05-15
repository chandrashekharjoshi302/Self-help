import React from 'react'
import Left from './Left'
import Right from './Right'

const Content = () => {

   const contentData = [
      {
        imgSrc: 'https://wmlnj.org/wp-content/uploads/2020/07/noun_my-account_3377923.png',
        title: 'Top Quality Content',
        description: 'A small river named Duden flows by their place and supplies'
      },
      {
        imgSrc: 'https://www.publicjobs.ie/images/Our_Recruitment_Process/ApplicationAdvice/PAS_Give_Examples_1080x1080.png',
        title: 'Top Quality Content',
        description: 'A small river named Duden flows by their place and supplies'
      },
      {
        imgSrc: 'https://img.icons8.com/officel/2x/test-passed.png',
        title: 'Top Quality Content',
        description: 'A small river named Duden flows by their place and supplies'
      },
      {
        imgSrc: 'https://img.icons8.com/color-glass/2x/certificate.png',
        title: 'Top Quality Content',
        description: 'A small river named Duden flows by their place and supplies'
      }
    ];
  return (
     <div id="middle">
     
     <Left/>
     <Right props={contentData}/>
   </div> 
  )
}

export default Content
 
 
