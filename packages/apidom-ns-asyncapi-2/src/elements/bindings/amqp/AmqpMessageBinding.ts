import { StringElement, ObjectElement, Attributes, Meta } from '@swagger-api/apidom-core';

class AmqpMessageBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'amqpMessageBinding';
    this.classes.push('message-binding');
  }

  get contentEncoding(): StringElement {
    return this.get('contentEncoding');
  }

  set contentEncoding(contentEncoding: StringElement) {
    this.set('contentEncoding', contentEncoding);
  }

  get messageType(): StringElement {
    return this.get('messageType');
  }

  set messageType(messageType: StringElement) {
    this.set('messageType', messageType);
  }

  get bindingVersion(): StringElement {
    return this.get('bindingVersion');
  }

  set bindingVersion(bindingVersion: StringElement) {
    this.set('bindingVersion', bindingVersion);
  }
}

export default AmqpMessageBinding;
