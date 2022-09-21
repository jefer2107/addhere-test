import React from 'react';

interface IFBLikeShareProps {
  href: string;
  width: string;
  hasLike: boolean;
}

const FBLikeShare: React.FC<IFBLikeShareProps> = ({ width, href, hasLike }) => {

  return (
     <React.Fragment>

        {/* <div id="fb-root"></div> */}
       
        <div className="fb-like" data-href={href} data-width="600px" data-layout="button" data-action={ hasLike ? 'like' : 'share' } data-size="large" data-share="true"></div>

     </React.Fragment>
  );
};

export default FBLikeShare;
