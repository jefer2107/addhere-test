import { useCallback, useEffect, useState } from "react";

const useFBLoginStatus = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);
  useEffect(async () => {
    new Promise((resolve, reject) => {
      const FB = window ? window.FB : null;
      if (FB) {
        FB.getLoginStatus(function(response) {
          resolve(response);
        });
      }
    }).then(response => {
      console.log('response', response);
      setState(!!response);
    });
  }, [process.browser]);
  return [state, toggle];
}



export default useFBLoginStatus;
