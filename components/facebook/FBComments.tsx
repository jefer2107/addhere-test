import React from 'react';
import { IPost } from '../../interfaces/IPost';

interface IFBCommentsProps {
  href: string;
  width: string;
  numPosts: number;
  post: IPost;
  dataLazy: boolean;
}

const FBComments: React.FC<IFBCommentsProps> = ({ width, href, numPosts, post, dataLazy }) => {
  
  return (
     <React.Fragment>

        <div className="fb-comments" data-href={href} data-numposts={numPosts} data-width={width} data-lazy={dataLazy}> 
        </div>

     </React.Fragment>
  );
};

export default FBComments;
