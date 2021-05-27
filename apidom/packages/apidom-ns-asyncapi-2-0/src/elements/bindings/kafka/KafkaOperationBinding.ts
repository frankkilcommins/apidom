import { Attributes, Meta, ObjectElement, StringElement } from 'minim';

import SchemaElement from '../../Schema';

class KafkaOperationBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'kafkaOperationBinding';
  }

  get groupId(): SchemaElement {
    return this.get('groupId');
  }

  set groupId(groupId: SchemaElement) {
    this.set('groupId', groupId);
  }

  get clientId(): SchemaElement {
    return this.get('clientId');
  }

  set clientId(clientId: SchemaElement) {
    this.set('clientId', clientId);
  }

  get bindingVersion(): StringElement {
    return this.get('bindingVersion');
  }

  set bindingVersion(bindingVersion: StringElement) {
    this.set('bindingVersion', bindingVersion);
  }
}

export default KafkaOperationBinding;
