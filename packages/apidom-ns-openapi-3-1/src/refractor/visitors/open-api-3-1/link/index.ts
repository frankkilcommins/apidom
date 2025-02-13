import stampit from 'stampit';
import { specificationObj as OpenApi3_1Specification } from '@swagger-api/apidom-ns-openapi-3-0';

import LinkElement from '../../../../elements/Link';

const {
  visitors: {
    document: {
      objects: {
        Link: { $visitor: BaseLinkVisitor },
      },
    },
  },
} = OpenApi3_1Specification;

const LinkVisitor = stampit(BaseLinkVisitor, {
  init() {
    this.element = new LinkElement();
  },
});

export default LinkVisitor;
