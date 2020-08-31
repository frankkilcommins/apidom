import { Attributes, Meta, ObjectElement } from 'minim';

class Operation extends ObjectElement {
  constructor(content?: Array<unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'operation';
  }
}

export default Operation;
