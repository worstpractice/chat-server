export interface IndexableObject {
  [key: string]: any;
}

export type Constructor<T extends {} = {}> = new (...args: any[]) => T;

export interface ServerSettings {
  port: number;
  protocol: `ws://` | `wss://`;
  domain: `localhost`;
}

export namespace Inbox {
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

export namespace Outbox {
  export interface ChatMessage {
    text: string;
    author: string;
  }

  export interface Username {
    username: string;
  }

  export type Message = ChatMessage | Username;
}
