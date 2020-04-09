import * as React from "react";
import { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { AutoBind } from "../decorators/AutoBind";
import { CountCalls } from "../decorators/CountCalls";

const splashPage = {
  pathname: "/join",
};

interface Props {}

interface State {}

@CountCalls
@AutoBind
class PitOfSuccess extends PureComponent<Props, State> {
  state: State = {};

  render(this: PitOfSuccess): JSX.Element {
    return <Redirect to={splashPage} />;
  }
}
export { PitOfSuccess };
