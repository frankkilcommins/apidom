import { NamespacePluginOptions } from 'minim';
import AsyncApi2_0 from './elements/AsyncApi2-0';
import Asyncapi from './elements/Asyncapi';
import Identifier from './elements/Identifier';
import Info from './elements/Info';
import License from './elements/License';
import Contact from './elements/Contact';
import Components from './elements/Components';
import Schema from './elements/Schema';

const asyncApi2_0 = {
  namespace: (options: NamespacePluginOptions) => {
    const { base } = options;

    base.register('asyncApi2_0', AsyncApi2_0);
    base.register('asyncapi', Asyncapi);
    base.register('identifier', Identifier);
    base.register('info', Info);
    base.register('license', License);
    base.register('contact', Contact);
    base.register('components', Components);
    base.register('schema', Schema);

    return base;
  },
};

export default asyncApi2_0;
