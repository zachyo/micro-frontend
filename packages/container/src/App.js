import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import { useState } from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const MarketingLazy = lazy(() => import("./components/marketingApp"));
const AuthLazy = lazy(() => import("./components/authApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
          {/* <MarketingApp />
          <AuthApp/> */}
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
