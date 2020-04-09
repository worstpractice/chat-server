import * as React from "react";
import { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Application } from "../components/Application";
import { AutoBind } from "../decorators/AutoBind";
import { CountCalls } from "../decorators/CountCalls";
import { PitOfSuccess } from "./PitOfSuccess";

interface Props {}

interface State {}

@CountCalls
@AutoBind
class Root extends PureComponent<Props, State> {
  state: State = {};

  render(this: Root): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Application} />
          <Route path="/" component={PitOfSuccess} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export { Root };
