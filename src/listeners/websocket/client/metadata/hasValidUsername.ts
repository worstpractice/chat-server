import WebSocket from "ws";

const hasValidUsername = new WeakSet<WebSocket>();

export { hasValidUsername };
