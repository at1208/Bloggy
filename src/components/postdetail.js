import React from 'react';
import HeaderTitle from './common/headertitle'
import DeleteButton from './common/button'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return <div>
        <HeaderTitle />
        <Link to='/deletepost'>
        <DeleteButton name='Delete'/>
        </Link>
         </div>
}
export default PostDetail;
