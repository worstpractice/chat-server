import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { PureComponent } from "react";
import { AutoBind } from "../../decorators/AutoBind";
import { CountCalls } from "../../decorators/CountCalls";

const year = new Date().getFullYear();

interface Props {}

interface State {}

@CountCalls
@AutoBind
class Copyright extends PureComponent<Props, State> {
  state: State = {};

  render(this: Copyright): JSX.Element {
    return (
      <Typography align="center" color="textSecondary" variant="body2">
        {`Copyright © `}
        <Link color="inherit" href="https://www.ui.com/">
          Ubiqwiti
        </Link>
        {` ${year}.`}
      </Typography>
    );
  }
}

export { Copyright };
