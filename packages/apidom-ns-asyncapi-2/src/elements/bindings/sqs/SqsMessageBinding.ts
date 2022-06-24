import { ObjectElement, Attributes, Meta } from '@swagger-api/apidom-core';

class SqsMessageBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'sqsMessageBinding';
    this.classes.push('message-binding');
  }
}

export default SqsMessageBinding;
