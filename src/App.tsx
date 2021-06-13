import Auth from "@aws-amplify/auth";
import LuxonUtils from "@date-io/luxon";
import { StylesProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Route, Switch } from "react-router-dom";
import { testDt } from "utils/datetimeUtil";

// export const getId = async () => await Auth.currentAuthenticatedUser();

const App: React.FC = () => {
  testDt();
  // const dispatch: AppDispatch = useDispatch();
  // const history = useHistory();
  // const location = useLocation();
  // const res = useSelector((state: RootState) => ({
  //     loginDate: state.common.loginDate,
  //     isLoading: state.common.isLoading
  // }), shallowEqual);
  // const isLoading = res.isLoading;
  return (
    <StylesProvider injectFirst>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div className="App">
          {/*loading表示*/}
          {/* {isLoading ? <Progress/> : null} */}
          {/*ログイン画面・パスワード再設定画面ではメニュー表示しない*/}
          {/* {location.pathname === pagePath.login || location.pathname === pagePath.forgotPassword ?
                        <header>
                            <div>
                                <img src={logo} alt="logo"/>
                            </div>
                        </header>
                        : <Menu/>
                    } */}
          <Switch>
            {/* <Route path={pagePath.login} key={pagePath.login}><Login/></Route> */}
            <Route path={pagePath.login} key={pagePath.login}>
              <Login />
            </Route>
          </Switch>
          <footer>
            <div />
          </footer>
        </div>
      </MuiPickersUtilsProvider>
    </StylesProvider>
  );
};

export default App;
