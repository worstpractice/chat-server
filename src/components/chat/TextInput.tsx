import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { ChangeEvent, KeyboardEvent, PureComponent } from "react";
import { AutoBind } from "../../decorators/AutoBind";
import { CountCalls } from "../../decorators/CountCalls";
import "../../styles/TextInput.css";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent) => void;
  mirror: string;
}

interface State {}

@CountCalls
@AutoBind
class TextInput extends PureComponent<Props, State> {
  state: State = {};

  render(this: TextInput): JSX.Element {
    const { onChange, onKeyDown, mirror }: Props = this.props;

    return (
      <div className="textinput">
        <TextField onChange={onChange} onKeyDown={onKeyDown} autoFocus fullWidth label="Message" margin="normal" rows="4" value={mirror} />
      </div>
    );
  }
}

export { TextInput };
