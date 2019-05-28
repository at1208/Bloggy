import React from 'react';
import HeaderTitle from './common/headertitle';
import AddButton from './common/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <HeaderTitle />
    <Link to='/addpost'>
    <AddButton name='Add Post'/>
  
      </Link>

    </div>
  )
}
export default Home;
