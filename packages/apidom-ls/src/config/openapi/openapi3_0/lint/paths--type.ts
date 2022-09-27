import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const pathsTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_OPEN_API_FIELD_PATHS_TYPE,
  source: 'apilint',
  message: 'paths must be an object',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['paths'],
  marker: 'value',
  target: 'paths',
  data: {},
};

export default pathsTypeLint;
