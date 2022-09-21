import * as React from 'react';

interface IFBLoginProps {
    width: string;
}

const FBLogin: React.FunctionComponent<IFBLoginProps> = ({ width }) => {
  return (
    <div className="fb-login-button" data-width={width} data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
  );
};

export default FBLogin;
