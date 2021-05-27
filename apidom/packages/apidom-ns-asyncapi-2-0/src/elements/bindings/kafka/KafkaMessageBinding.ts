import { Attributes, Meta, ObjectElement, StringElement } from 'minim';

import SchemaElement from '../../Schema';

class KafkaMessageBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'kafkaMessageBinding';
  }

  get key(): SchemaElement {
    return this.get('key');
  }

  set key(key: SchemaElement) {
    this.set('key', key);
  }

  get bindingVersion(): StringElement {
    return this.get('bindingVersion');
  }

  set bindingVersion(bindingVersion: StringElement) {
    this.set('bindingVersion', bindingVersion);
  }
}

export default KafkaMessageBinding;
