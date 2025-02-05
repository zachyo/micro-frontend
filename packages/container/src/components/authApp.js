import { mount as mountAuth } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountAuth(ref.current, {
      // iniital path for subapp without initial directory
      initialPath : history?.location?.pathname,
    // gets navigated pathname from container and passes it to itself
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history?.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
  // listens to itself for navigation and passes the pathname to marketing
    history.listen(onParentNavigate)
  }, []);

  return <div className="" ref={ref}></div>;
};

export default AuthApp;
