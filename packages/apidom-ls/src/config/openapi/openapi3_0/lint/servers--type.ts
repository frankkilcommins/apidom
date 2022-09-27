import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const serversTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_OPEN_API_FIELD_SERVERS_TYPE,
  source: 'apilint',
  message: 'servers must be an array',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['servers'],
  marker: 'value',
  target: 'servers',
  data: {},
};

export default serversTypeLint;
