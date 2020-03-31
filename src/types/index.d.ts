declare module Inbox {
  export interface Message {
    text: string;
    author: string;
  }

  export interface Username {
    username: string;
  }
}

declare namespace Outbox {
  export interface Message {
    text: string;
    author: string;
    UUID: string;
  }

  export interface Username {
    isUsernameAccepted: boolean;
  }
}
