import allowedFields3_0Lint from './allowed-fields-3-0';
import allowedFields3_1Lint from './allowed-fields-3-1';
import descriptionTypeLint from './description--type';
import descriptionRequiredLint from './description--required';
import headersValuesTypeLint from './headers--values-type';
import contentValuesTypeLint from './content--values-type';
import linksValuesTypeLint from './links--values-type';

const lints = [
  descriptionTypeLint,
  descriptionRequiredLint,
  headersValuesTypeLint,
  contentValuesTypeLint,
  linksValuesTypeLint,
  allowedFields3_0Lint,
  allowedFields3_1Lint,
];

export default lints;
