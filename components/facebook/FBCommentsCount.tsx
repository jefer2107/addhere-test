import * as React from 'react';

interface IFBCommentsCountProps {
    href: string;
}

const FBCommentsCount: React.FC<IFBCommentsCountProps> = ({ href }) =>  {
  return (
      <span className="fb-comments-count" data-href={href}></span>
  );
}

export default FBCommentsCount;