import React from 'react';
import './headertitle.css'
import GoogleOauth from '../googleoauth'

const HeaderTitle = () => {
  return <div className='container-fluid'>
        <div className='a2 row justify-content-center card'>

        <span className='a1 class-title text-center'>Bloggy <GoogleOauth /></span>

        </div>
         </div>
}
export default HeaderTitle;
