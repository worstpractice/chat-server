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
