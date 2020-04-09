import * as React from "react";
import { PureComponent } from "react";
import { AutoBind } from "../../decorators/AutoBind";
import { CountCalls } from "../../decorators/CountCalls";

interface Props {
  author: string;
  text: string;
}

interface State {}

@CountCalls
@AutoBind
class Message extends PureComponent<Props, State> {
  state: State = {};

  render(this: Message): JSX.Element {
    const { author, text }: Props = this.props;

    return <li>{`${author}: ${text}`}</li>;
  }
}

export { Message };
