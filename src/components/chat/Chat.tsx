import * as React from "react";
import { ChangeEvent, KeyboardEvent, PureComponent } from "react";
import { AutoBind } from "../../decorators/AutoBind";
import { CountCalls } from "../../decorators/CountCalls";
import { Inbox } from "../../typings/declarations";
import { Conversation } from "./Conversation";
import { TextInput } from "./TextInput";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent) => void;
  messages: Inbox.ChatMessage[];
  mirror: string;
  username: string;
}

interface State {}

@CountCalls
@AutoBind
class Chat extends PureComponent<Props, State> {
  state: State = {};

  render(this: Chat): JSX.Element {
    const { onChange, onKeyDown, messages, mirror, username }: Props = this.props;

    return (
      <>
        <Conversation messages={messages} username={username} />
        <TextInput onChange={onChange} onKeyDown={onKeyDown} mirror={mirror} />
      </>
    );
  }
}

export { Chat };
