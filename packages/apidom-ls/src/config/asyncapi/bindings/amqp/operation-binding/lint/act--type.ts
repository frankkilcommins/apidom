import ApilintCodes from '../../../../../codes';
import { LinterMeta } from '../../../../../../apidom-language-types';

const ackTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_ACK_TYPE,
  source: 'apilint',
  message: "'ack' value must be a boolean",
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['boolean'],
  marker: 'value',
  target: 'ack',
  data: {},
};

export default ackTypeLint;
