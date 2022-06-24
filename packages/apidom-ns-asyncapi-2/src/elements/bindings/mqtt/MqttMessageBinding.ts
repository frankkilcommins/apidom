import { StringElement, ObjectElement, Attributes, Meta } from '@swagger-api/apidom-core';

class MqttMessageBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'mqttMessageBinding';
    this.classes.push('message-binding');
  }

  get bindingVersion(): StringElement {
    return this.get('bindingVersion');
  }

  set bindingVersion(bindingVersion: StringElement) {
    this.set('bindingVersion', bindingVersion);
  }
}

export default MqttMessageBinding;
