declare namespace Inbox {
  export interface ChatMessage {
    text: string;
    author: string;
  }

  export interface Username {
    username: string;
  }

  export type Message = ChatMessage | Username;
}

declare namespace Outbox {
  export interface ChatMessage {
    text: string;
    author: string;
    UUID: string;
  }

  export interface Username {
    isUsernameAccepted: boolean;
  }

  export type Message = ChatMessage | Username;
}
