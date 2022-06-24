import { ObjectElement, Attributes, Meta } from '@swagger-api/apidom-core';

class WebSocketServerBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'webSocketServerBinding';
    this.classes.push('server-binding');
  }
}

export default WebSocketServerBinding;
