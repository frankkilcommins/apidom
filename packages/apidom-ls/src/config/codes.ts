enum ApilintCodes {
  SCHEMA_TYPE = 10001,
  SCHEMA_MAXLENGTH,
  SCHEMA_MAXLENGTH_NONSTRING,
  SCHEMA_MINLENGTH,
  SCHEMA_MINLENGTH_NONSTRING,
  SCHEMA_ID,
  SCHEMA_REF,
  SCHEMA_REF_NOSIBLINGS,
  SCHEMA_ENUM,
  SCHEMA_MULTIPLEOF,
  SCHEMA_PATTERN,
  SCHEMA_DISCRIMINATOR,
  SCHEMA_DISCRIMINATOR_EXIST,
  SCHEMA_MAXIMUM,
  SCHEMA_MINUMUM,
  SCHEMA_EXCLUSIVEMAXIMUM,
  SCHEMA_EXCLUSIVEMINUMUM,
  SCHEMA_ITEMS,
  SCHEMA_ITEMS_NONARRAY,
  SCHEMA_ADDITIONALITEMS,
  SCHEMA_ADDITIONALITEMS_NONARRAY,
  SCHEMA_MAXITEMS,
  SCHEMA_MAXITEMS_NONARRAY,
  SCHEMA_MINITEMS,
  SCHEMA_MINITEMS_NONARRAY,
  SCHEMA_UNIQUEITEMS,
  SCHEMA_UNIQUEITEMS_NONARRAY,
  SCHEMA_CONTAINS,
  SCHEMA_CONTAINS_NONARRAY,
  SCHEMA_MAXPROPERTIES,
  SCHEMA_MAXPROPERTIES_NONOBJECT,
  SCHEMA_MINPROPERTIES,
  SCHEMA_MINPROPERTIES_NONOBJECT,
  SCHEMA_REQUIRED,
  SCHEMA_REQUIRED_NONOBJECT,
  SCHEMA_REQUIRED_WITHOUT_PROPERTIES,
  SCHEMA_PROPERTIES,
  SCHEMA_PROPERTIES_NONOBJECT,
  SCHEMA_PROPERTIES_OBJECT,
  SCHEMA_PATTERNPROPERTIES,
  SCHEMA_PATTERNPROPERTIES_KEY,
  SCHEMA_PATTERNPROPERTIES_NONOBJECT,
  SCHEMA_PATTERNPROPERTIES_OBJECT,
  SCHEMA_ADDITIONALPROPERTIES,
  SCHEMA_ADDITIONALPROPERTIES_NONOBJECT,
  SCHEMA_PROPERTYNAMES,
  SCHEMA_PROPERTYNAMES_NONOBJECT,
  SCHEMA_IF,
  SCHEMA_IF_NONTHEN,
  SCHEMA_ELSE,
  SCHEMA_ELSE_NONIF,
  SCHEMA_THEN,
  SCHEMA_THEN_NONIF,
  SCHEMA_ALLOF,
  SCHEMA_ONEOF,
  SCHEMA_ANYOF,
  SCHEMA_NOT,
  SCHEMA_FORMAT,
  SCHEMA_TITLE = 10063,
  SCHEMA_DESCRIPTION,
  SCHEMA_READONLY,
  SCHEMA_WRITEONLY,
  SCHEMA_EXAMPLES,
  SCHEMA_EXTERNAL_DOCS,

  DUPLICATE_KEYS = 14999,
  NOT_ALLOWED_FIELDS = 15000,

  ASYNCAPI2 = 20000,

  ASYNCAPI2_ASYNC_API_VERSION_VALUE_PATTERN_2_0_0 = 20100,
  ASYNCAPI2_ASYNC_API_VERSION_VALUE_PATTERN_2_1_0,
  ASYNCAPI2_ASYNC_API_VERSION_VALUE_PATTERN_2_2_0,
  ASYNCAPI2_ASYNC_API_VERSION_VALUE_PATTERN_2_3_0,
  ASYNCAPI2_ASYNC_API_VERSION_VALUE_PATTERN_2_4_0,

  ASYNCAPI2_ASYNC_API = 30000,
  ASYNCAPI2_ASYNC_API_FIELD_ASYNCAPI_REQUIRED = 30100,
  ASYNCAPI2_ASYNC_API_FIELD_CHANNELS_TYPE,
  ASYNCAPI2_ASYNC_API_FIELD_CHANNELS_REQUIRED,
  ASYNCAPI2_ASYNC_API_FIELD_COMPONENTS_TYPE = 30200,
  ASYNCAPI2_ASYNC_API_FIELD_DEFAULT_CONTENT_TYPE_TYPE = 30300,
  ASYNCAPI2_ASYNC_API_FIELD_ID_TYPE = 30400,
  ASYNCAPI2_ASYNC_API_FIELD_INFO_TYPE = 30500,
  ASYNCAPI2_ASYNC_API_FIELD_INFO_REQUIRED,
  ASYNCAPI2_ASYNC_API_FIELD_SERVERS_TYPE = 30600,
  ASYNCAPI2_ASYNC_API_FIELD_TAGS_TYPE = 30700,

  ASYNCAPI2_CHANNELS = 40000,
  ASYNCAPI2_CHANNELS_VALUES_TYPE = 40100,

  ASYNCAPI2_SERVERS = 50000,
  ASYNCAPI2_SERVERS_KEYS_PATTERN,
  ASYNCAPI2_SERVERS_VALUES_TYPE,

  ASYNCAPI2_TAGS = 60000,
  ASYNCAPI2_TAGS_ITEMS_TYPE,

  ASYNCAPI2_INFO = 70000,
  ASYNCAPI2_INFO_FIELD_TITLE_TYPE = 70100,
  ASYNCAPI2_INFO_FIELD_TITLE_REQUIRED,
  ASYNCAPI2_INFO_FIELD_VERSION_TYPE = 70200,
  ASYNCAPI2_INFO_FIELD_VERSION_REQUIRED,
  ASYNCAPI2_INFO_FIELD_DESCRIPTION_TYPE = 70300,
  ASYNCAPI2_INFO_FIELD_TERMS_OF_SERVICE_FORMAT_URI = 70400,
  ASYNCAPI2_INFO_FIELD_CONTACT_TYPE = 70500,
  ASYNCAPI2_INFO_FIELD_LICENSE_TYPE = 70600,

  ASYNCAPI2_CONTACT = 80000,
  ASYNCAPI2_CONTACT_FIELD_NAME_TYPE = 80100,
  ASYNCAPI2_CONTACT_FIELD_EMAIL_FORMAT_EMAIL = 80200,
  ASYNCAPI2_CONTACT_FIELD_URL_FORMAT_URI = 80200,

  ASYNCAPI2_LICENSE = 90000,
  ASYNCAPI2_LICENSE_FIELD_NAME_TYPE = 90100,
  ASYNCAPI2_LICENSE_FIELD_NAME_REQUIRED,
  ASYNCAPI2_LICENSE_FIELD_URL_FORMAT_URI = 90200,

  ASYNCAPI2_SERVER = 100000,
  ASYNCAPI2_SERVER_FIELD_URL_FORMAT_URI = 100100,
  ASYNCAPI2_SERVER_FIELD_URL_REQUIRED,
  ASYNCAPI2_SERVER_FIELD_PROTOCOL_TYPE = 100200,
  ASYNCAPI2_SERVER_FIELD_PROTOCOL_REQUIRED,
  ASYNCAPI2_SERVER_FIELD_PROTOCOL_VERSION_TYPE = 100300,
  ASYNCAPI2_SERVER_FIELD_DESCRIPTION_TYPE = 100400,
  ASYNCAPI2_SERVER_FIELD_SECURITY_TYPE = 100500,
  ASYNCAPI2_SERVER_FIELD_SECURITY_ITEMS_TYPE,
  ASYNCAPI2_SERVER_FIELD_VARIABLES_TYPE = 100600,
  ASYNCAPI2_SERVER_FIELD_VARIABLES_VALUES_TYPE,
  ASYNCAPI2_SERVER_FIELD_BINDINGS_TYPE = 1007000,
  ASYNCAPI2_SERVER_FIELD_$REF_VALID = 100800,
  ASYNCAPI2_SERVER_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_SERVER_VARIABLE = 110000,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_ENUM_TYPE = 110100,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_DEFAULT_TYPE = 110200,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_DESCRIPTION_TYPE = 110300,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_EXAMPLES_TYPE = 110400,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_$REF_VALID = 110500,
  ASYNCAPI2_SERVER_VARIABLE_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_CHANNEL_ITEM = 120000,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_$REF_VALID = 120100,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_DESCRIPTION_TYPE = 120200,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_SERVERS_TYPE = 120300,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_SERVERS_KEYS_DEFINED,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_SUBSCRIBE_TYPE = 120400,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_PUBLISH_TYPE = 120500,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_PARAMETERS_TYPE = 120600,
  ASYNCAPI2_CHANNEL_ITEM_FIELD_BINDINGS_TYPE = 120700,

  ASYNCAPI2_OPERATION = 130000,
  ASYNCAPI2_OPERATION_FIELD_OPERATION_ID_TYPE = 130100,
  ASYNCAPI2_OPERATION_FIELD_OPERATION_ID_UNIQUE,
  ASYNCAPI2_OPERATION_FIELD_SUMMARY_TYPE = 130200,
  ASYNCAPI2_OPERATION_FIELD_DESCRIPTION_TYPE = 130300,
  ASYNCAPI2_OPERATION_FIELD_SECURITY_TYPE = 130400,
  ASYNCAPI2_OPERATION_FIELD_SECURITY_ITEMS_TYPE,
  ASYNCAPI2_OPERATION_FIELD_TAGS_TYPE = 130500,
  ASYNCAPI2_OPERATION_FIELD_EXTERNAL_DOCS_TYPE = 130600,
  ASYNCAPI2_OPERATION_FIELD_BINDINGS_TYPE = 130700,
  ASYNCAPI2_OPERATION_FIELD_TRAITS_TYPE = 130800,
  ASYNCAPI2_OPERATION_FIELD_TRAITS_ITEMS_TYPE,
  ASYNCAPI2_OPERATION_FIELD_MESSAGE_TYPE = 130900,

  ASYNCAPI2_OPERATION_TRAIT = 140000,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_OPERATION_ID_TYPE = 140100,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_OPERATION_ID_UNIQUE,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_SUMMARY_TYPE = 140200,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_DESCRIPTION_TYPE = 140300,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_SECURITY_TYPE = 140400,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_SECURITY_ITEMS_TYPE,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_TAGS_TYPE = 140500,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_EXTERNAL_DOCS_TYPE = 140600,
  ASYNCAPI2_OPERATION_TRAIT_FIELD_BINDINGS_TYPE = 140700,

  ASYNCAPI2_PARAMETERS = 150000,
  ASYNCAPI2_PARAMETERS_KEYS_PATTERN,
  ASYNCAPI2_PARAMETERS_VALUES_TYPE,

  ASYNCAPI2_PARAMETER = 160000,
  ASYNCAPI2_PARAMETER_KEY_EXISTS_IN_CHANNEL,
  ASYNCAPI2_PARAMETER_FIELD_DESCRIPTION_TYPE = 160100,
  ASYNCAPI2_PARAMETER_FIELD_SCHEMA_TYPE = 160200,
  ASYNCAPI2_PARAMETER_FIELD_LOCATION_TYPE = 160300,
  ASYNCAPI2_PARAMETER_FIELD_$REF_VALID = 160400,
  ASYNCAPI2_PARAMETER_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_SERVER_BINDINGS = 170000,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_HTTP_TYPE = 170100,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_WS_TYPE = 170200,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_KAFKA_TYPE = 170300,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_ANYPOINTMQ_TYPE = 170400,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_AMQP_TYPE = 170500,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_AMQP1_TYPE = 170600,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_MQTT_TYPE = 170700,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_MQTT5_TYPE = 170800,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_NATS_TYPE = 170700,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_JMS_TYPE = 170800,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_SNS_TYPE = 170900,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_SOLACE_TYPE = 171000,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_SQS_TYPE = 171100,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_STOMP_TYPE = 171200,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_REDIS_TYPE = 171300,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_MERCURE_TYPE = 171400,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_IBMMQ_TYPE = 171500,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_$REF_VALID = 171600,
  ASYNCAPI2_SERVER_BINDINGS_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_CHANNEL_BINDINGS = 180000,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_HTTP_TYPE = 180100,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_WS_TYPE = 180200,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_KAFKA_TYPE = 180300,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_ANYPOINTMQ_TYPE = 180400,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_AMQP_TYPE = 180500,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_AMQP1_TYPE = 180600,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_MQTT_TYPE = 180700,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_MQTT5_TYPE = 180800,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_NATS_TYPE = 180700,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_JMS_TYPE = 180800,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_SNS_TYPE = 180900,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_SOLACE_TYPE = 181000,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_SQS_TYPE = 181100,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_STOMP_TYPE = 181200,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_REDIS_TYPE = 181300,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_MERCURE_TYPE = 181400,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_IBMMQ_TYPE = 181500,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_$REF_VALID = 181600,
  ASYNCAPI2_CHANNEL_BINDINGS_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_OPERATION_BINDINGS = 190000,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_HTTP_TYPE = 190100,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_WS_TYPE = 190200,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_KAFKA_TYPE = 190300,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_ANYPOINTMQ_TYPE = 190400,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_AMQP_TYPE = 190500,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_AMQP1_TYPE = 190600,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_MQTT_TYPE = 190700,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_MQTT5_TYPE = 190800,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_NATS_TYPE = 190700,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_JMS_TYPE = 190800,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_SNS_TYPE = 190900,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_SOLACE_TYPE = 191000,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_SQS_TYPE = 191100,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_STOMP_TYPE = 191200,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_REDIS_TYPE = 191300,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_MERCURE_TYPE = 191400,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_$REF_VALID = 191500,
  ASYNCAPI2_OPERATION_BINDINGS_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_MESSAGE_BINDINGS = 200000,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_HTTP_TYPE = 200100,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_WS_TYPE = 200200,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_KAFKA_TYPE = 200300,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_ANYPOINTMQ_TYPE = 200400,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_AMQP_TYPE = 200500,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_AMQP1_TYPE = 200600,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_MQTT_TYPE = 200700,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_MQTT5_TYPE = 200800,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_NATS_TYPE = 200700,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_JMS_TYPE = 200800,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_SNS_TYPE = 200900,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_SOLACE_TYPE = 201000,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_SQS_TYPE = 201100,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_STOMP_TYPE = 201200,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_REDIS_TYPE = 201300,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_MERCURE_TYPE = 201400,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_IBMMQ_TYPE = 201500,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_$REF_VALID = 201600,
  ASYNCAPI2_MESSAGE_BINDINGS_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_MESSAGE = 210000,
  ASYNCAPI2_MESSAGE_FIELD_MESSAGE_ID_TYPE = 210100,
  ASYNCAPI2_MESSAGE_FIELD_MESSAGE_ID_UNIQUE,
  ASYNCAPI2_MESSAGE_FIELD_HEADERS_TYPE = 210200,
  ASYNCAPI2_MESSAGE_FIELD_CORRELATION_ID_TYPE = 210300,
  ASYNCAPI2_MESSAGE_FIELD_SCHEMA_FORMAT_TYPE = 210400,
  ASYNCAPI2_MESSAGE_FIELD_CONTENT_TYPE_TYPE = 210500,
  ASYNCAPI2_MESSAGE_FIELD_NAME_TYPE = 210600,
  ASYNCAPI2_MESSAGE_FIELD_TITLE_TYPE = 210700,
  ASYNCAPI2_MESSAGE_FIELD_SUMMARY_TYPE = 210800,
  ASYNCAPI2_MESSAGE_FIELD_DESCRIPTION_TYPE = 210900,
  ASYNCAPI2_MESSAGE_FIELD_TAGS_TYPE = 211000,
  ASYNCAPI2_MESSAGE_FIELD_EXTERNAL_DOCS_TYPE = 211100,
  ASYNCAPI2_MESSAGE_FIELD_BINDINGS_TYPE = 211200,
  ASYNCAPI2_MESSAGE_FIELD_EXAMPLES_TYPE = 211300,
  ASYNCAPI2_MESSAGE_FIELD_EXAMPLES_ITEMS_TYPE,
  ASYNCAPI2_MESSAGE_FIELD_TRAITS_TYPE = 211400,
  ASYNCAPI2_MESSAGE_FIELD_TRAITS_ITEMS_TYPE,
  ASYNCAPI2_MESSAGE_FIELD_$REF_VALID = 211500,
  ASYNCAPI2_MESSAGE_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_MESSAGE_TRAIT = 220000,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_MESSAGE_ID_TYPE = 220100,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_MESSAGE_ID_UNIQUE,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_HEADERS_TYPE = 220200,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_CORRELATION_ID_TYPE = 220300,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_SCHEMA_FORMAT_TYPE = 220400,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_CONTENT_TYPE_TYPE = 220500,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_NAME_TYPE = 220600,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_TITLE_TYPE = 220700,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_SUMMARY_TYPE = 220800,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_DESCRIPTION_TYPE = 220900,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_TAGS_TYPE = 221000,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_EXTERNAL_DOCS_TYPE = 221100,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_BINDINGS_TYPE = 221200,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_EXAMPLES_TYPE = 221300,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_EXAMPLES_ITEMS_TYPE,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_$REF_VALID = 221500,
  ASYNCAPI2_MESSAGE_TRAIT_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_MESSAGE_EXAMPLE = 230000,
  ASYNCAPI2_MESSAGE_EXAMPLE_FIELD_HEADERS_TYPE = 230100,
  ASYNCAPI2_MESSAGE_EXAMPLE_FIELD_NAME_TYPE = 230200,
  ASYNCAPI2_MESSAGE_EXAMPLE_FIELD_SUMMARY_TYPE = 230300,

  ASYNCAPI2_TAG = 240000,
  ASYNCAPI2_TAG_FIELD_NAME_TYPE = 240100,
  ASYNCAPI2_TAG_FIELD_NAME_REQUIRED,
  ASYNCAPI2_TAG_FIELD_DESCRIPTION_TYPE = 240200,
  ASYNCAPI2_TAG_FIELD_EXTERNAL_DOCS_TYPE = 240300,

  ASYNCAPI2_EXTERNAL_DOCUMENTATION = 250000,
  ASYNCAPI2_EXTERNAL_DOCUMENTATION_FIELD_DESCRIPTION_TYPE = 250100,
  ASYNCAPI2_EXTERNAL_DOCUMENTATION_FIELD_URL_FORMAT_URI = 250200,
  ASYNCAPI2_EXTERNAL_DOCUMENTATION_FIELD_URL_REQUIRED,

  ASYNCAPI2_COMPONENTS = 260000,
  ASYNCAPI2_COMPONENTS_KEYS_PATTERN,
  ASYNCAPI2_COMPONENTS_FIELD_SCHEMAS_VALUES_TYPE = 260100,
  ASYNCAPI2_COMPONENTS_FIELD_SERVERS_VALUES_TYPE = 260200,
  ASYNCAPI2_COMPONENTS_FIELD_SERVER_VARIABLES_VALUES_TYPE = 260300,
  ASYNCAPI2_COMPONENTS_FIELD_CHANNELS_VALUES_TYPE = 260400,
  ASYNCAPI2_COMPONENTS_FIELD_MESSAGES_VALUES_TYPE = 260500,
  ASYNCAPI2_COMPONENTS_FIELD_SECURITY_SCHEMES_VALUES_TYPE = 260600,
  ASYNCAPI2_COMPONENTS_FIELD_PARAMETERS_VALUES_TYPE = 260700,
  ASYNCAPI2_COMPONENTS_FIELD_CORRELATION_IDS_VALUES_TYPE = 260800,
  ASYNCAPI2_COMPONENTS_FIELD_OPERATION_TRAITS_VALUES_TYPE = 260900,
  ASYNCAPI2_COMPONENTS_FIELD_MESSAGE_TRAITS_VALUES_TYPE = 261000,
  ASYNCAPI2_COMPONENTS_FIELD_SERVER_BINDINGS_VALUES_TYPE = 261100,
  ASYNCAPI2_COMPONENTS_FIELD_CHANNEL_BINDINGS_VALUES_TYPE = 261200,
  ASYNCAPI2_COMPONENTS_FIELD_OPERATION_BINDINGS_VALUES_TYPE = 261300,
  ASYNCAPI2_COMPONENTS_FIELD_MESSAGE_BINDINGS_VALUES_TYPE = 261400,

  ASYNCAPI2_SECURITY_SCHEME = 270000,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_TYPE_EQUALS_2_2 = 270100,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_TYPE_EQUALS_2_2__2_4,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_TYPE_REQUIRED,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_DESCRIPTION_TYPE = 270200,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_NAME_TYPE = 270300,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_NAME_REQUIRED,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_IN_REQUIRED_API_KEY,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_IN_REQUIRED_HTTP_API_KEY,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_IN_EQUALS_API_KEY,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_IN_EQUALS_HTTP_API_KEY,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_SCHEME_TYPE = 270500,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_SCHEME_REQUIRED,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_BEARER_FORMAT_TYPE = 270600,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_FLOWS_TYPE = 270700,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_FLOWS_REQUIRED,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_OPEN_ID_CONNECT_URL_TYPE = 270800,
  ASYNCAPI2_SECURITY_SCHEME_FIELD_OPEN_ID_CONNECT_URL_REQUIRED,

  ASYNCAPI2_OAUTH_FLOWS = 280000,
  ASYNCAPI2_OAUTH_FLOWS_FIELD_IMPLICIT_TYPE = 280100,
  ASYNCAPI2_OAUTH_FLOWS_FIELD_PASSWORD_TYPE = 280200,
  ASYNCAPI2_OAUTH_FLOWS_FIELD_CLIENT_CREDENTIALS_TYPE = 280300,
  ASYNCAPI2_OAUTH_FLOWS_FIELD_AUTHORIZATION_CODE_TYPE = 280400,

  ASYNCAPI2_OAUTH_FLOW = 290000,
  ASYNCAPI2_OAUTH_FLOW_FIELD_AUTHORIZATION_URL_FORMAT_URI = 290100,
  ASYNCAPI2_OAUTH_FLOW_FIELD_AUTHORIZATION_URL_REQUIRED,
  ASYNCAPI2_OAUTH_FLOW_FIELD_TOKEN_URL_FORMAT_URI = 290200,
  ASYNCAPI2_OAUTH_FLOW_FIELD_TOKEN_URL_REQUIRED,
  ASYNCAPI2_OAUTH_FLOW_FIELD_REFRESH_URL_FORMAT_URI = 290300,
  ASYNCAPI2_OAUTH_FLOW_FIELD_SCOPES_TYPE = 290400,
  ASYNCAPI2_OAUTH_FLOW_FIELD_SCOPES_REQUIRED,

  ASYNCAPI2_SECURITY_REQUIREMENT = 300000,
  ASYNCAPI2_SECURITY_REQUIREMENT_KEYS_DEFINED,

  ASYNCAPI2_CORRELATION_ID = 310000,
  ASYNCAPI2_CORRELATION_ID_FIELD_DESCRIPTION_TYPE = 310100,
  ASYNCAPI2_CORRELATION_ID_FIELD_LOCATION_TYPE = 310200,
  ASYNCAPI2_CORRELATION_ID_FIELD_LOCATION_REQUIRED,
  ASYNCAPI2_CORRELATION_ID_FIELD_$REF_VALID = 310300,
  ASYNCAPI2_CORRELATION_ID_FIELD_$REF_NO_SIBLINGS,

  ASYNCAPI2_AMQP_CHANNEL_BINDING = 320000,
  ASYNCAPI2_AMQP_CHANNEL_BINDING_FIELD_IS_EQUALS = 320100,
  ASYNCAPI2_AMQP_CHANNEL_BINDING_FIELD_EXCHANGE_TYPE = 320200,
  ASYNCAPI2_AMQP_CHANNEL_BINDING_FIELD_QUEUE_TYPE = 320300,
  ASYNCAPI2_AMQP_CHANNEL_BINDING_FIELD_BINDING_VERSION_TYPE = 320400,

  ASYNCAPI2_AMQP_MESSAGE_BINDING = 330000,
  ASYNCAPI2_AMQP_MESSAGE_BINDING_FIELD_CONTENT_ENCODING_TYPE = 330100,
  ASYNCAPI2_AMQP_MESSAGE_BINDING_FIELD_MESSAGE_TYPE_TYPE = 330200,
  ASYNCAPI2_AMQP_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 330300,

  ASYNCAPI2_AMQP_OPERATION_BINDING = 340000,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_EXPIRATION_TYPE = 340100,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_USER_ID_TYPE = 340200,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_CC_TYPE = 340300,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_PRIORITY_TYPE = 340400,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_DELIVERY_MODE_EQUALS = 340500,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_MANDATORY_TYPE = 340600,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_BCC_TYPE = 340700,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_REPLY_TO_TYPE = 340800,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_TIMESTAMP_TYPE = 340900,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_ACK_TYPE = 350000,
  ASYNCAPI2_AMQP_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 350100,

  ASYNCAPI2_AMQP_SERVER_BINDING = 350000,

  ASYNCAPI2_AMQP1_CHANNEL_BINDING = 360000,
  ASYNCAPI2_AMQP1_MESSAGE_BINDING = 370000,
  ASYNCAPI2_AMQP1_OPERATION_BINDING = 380000,
  ASYNCAPI2_AMQP1_SERVER_BINDING = 390000,

  ASYNCAPI2_ANYPOINTMQ_CHANNEL_BINDING = 400000,
  ASYNCAPI2_ANYPOINTMQ_CHANNEL_BINDING_FIELD_BINDING_VERSION = 400100,
  ASYNCAPI2_ANYPOINTMQ_CHANNEL_BINDING_FIELD_DESTINATION_TYPE = 400200,
  ASYNCAPI2_ANYPOINTMQ_CHANNEL_BINDING_FIELD_DESTINATION_TYPE_TYPE = 400300,

  ASYNCAPI2_ANYPOINTMQ_MESSAGE_BINDING = 410000,
  ASYNCAPI2_ANYPOINTMQ_MESSAGE_BINDING_FIELD_HEADERS_TYPE = 410100,
  ASYNCAPI2_ANYPOINTMQ_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 410200,

  ASYNCAPI2_ANYPOINTMQ_OPERATION_BINDING = 420000,
  ASYNCAPI2_ANYPOINTMQ_SERVER_BINDING = 420000,

  ASYNCAPI2_HTTP_CHANNEL_BINDING = 430000,

  ASYNCAPI2_HTTP_MESSAGE_BINDING = 440000,
  ASYNCAPI2_HTTP_MESSAGE_BINDING_FIELD_HEADERS_TYPE = 440100,
  ASYNCAPI2_HTTP_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 440200,

  ASYNCAPI2_HTTP_OPERATION_BINDING = 450000,
  ASYNCAPI2_HTTP_OPERATION_BINDING_FIELD_TYPE_TYPE = 450100,
  ASYNCAPI2_HTTP_OPERATION_BINDING_FIELD_TYPE_REQUIRED,
  ASYNCAPI2_HTTP_OPERATION_BINDING_FIELD_METHOD_TYPE = 450100,
  ASYNCAPI2_HTTP_OPERATION_BINDING_FIELD_QUERY_TYPE = 450200,
  ASYNCAPI2_HTTP_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 450300,

  ASYNCAPI2_HTTP_SERVER_BINDING = 460000,

  ASYNCAPI2_JMS_CHANNEL_BINDING = 470000,
  ASYNCAPI2_JMS_MESSAGE_BINDING = 480000,
  ASYNCAPI2_JMS_OPERATION_BINDING = 490000,
  ASYNCAPI2_JMS_SERVER_BINDING = 500000,

  ASYNCAPI2_KAFKA_CHANNEL_BINDING = 510000,

  ASYNCAPI2_KAFKA_MESSAGE_BINDING = 520000,
  ASYNCAPI2_KAFKA_MESSAGE_BINDING_FIELD_KEY_TYPE = 520100,
  ASYNCAPI2_KAFKA_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 520200,

  ASYNCAPI2_KAFKA_OPERATION_BINDING = 530000,
  ASYNCAPI2_KAFKA_OPERATION_BINDING_FIELD_GROUP_ID_TYPE = 530100,
  ASYNCAPI2_KAFKA_OPERATION_BINDING_FIELD_CLIENT_ID_TYPE = 530200,
  ASYNCAPI2_KAFKA_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 530300,

  ASYNCAPI2_KAFKA_SERVER_BINDING = 540000,

  ASYNCAPI2_MERCURE_CHANNEL_BINDING = 550000,
  ASYNCAPI2_MERCURE_MESSAGE_BINDING = 560000,
  ASYNCAPI2_MERCURE_OPERATION_BINDING = 570000,
  ASYNCAPI2_MERCURE_SERVER_BINDING = 580000,

  ASYNCAPI2_MQTT_CHANNEL_BINDING = 590000,

  ASYNCAPI2_MQTT_MESSAGE_BINDING = 600000,
  ASYNCAPI2_MQTT_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 600100,

  ASYNCAPI2_MQTT_OPERATION_BINDING = 610000,
  ASYNCAPI2_MQTT_OPERATION_BINDING_FIELD_QOS_EQUALS = 610100,
  ASYNCAPI2_MQTT_OPERATION_BINDING_FIELD_RETAIN_TYPE = 610200,
  ASYNCAPI2_MQTT_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 610300,

  ASYNCAPI2_MQTT_SERVER_BINDING = 620000,
  ASYNCAPI2_MQTT_SERVER_BINDING_FIELD_CLIENT_ID_TYPE = 620100,
  ASYNCAPI2_MQTT_SERVER_BINDING_FIELD_CLEAN_SESSION_TYPE = 620200,
  ASYNCAPI2_MQTT_SERVER_BINDING_FIELD_LAST_WILL_TYPE = 620300,
  ASYNCAPI2_MQTT_SERVER_BINDING_FIELD_KEEP_ALIVE_TYPE = 620400,
  ASYNCAPI2_MQTT_SERVER_BINDING_FIELD_BINDING_VERSION_TYPE = 620500,

  ASYNCAPI2_MQTT5_CHANNEL_BINDING = 630000,
  ASYNCAPI2_MQTT5_MESSAGE_BINDING = 640000,
  ASYNCAPI2_MQTT5_OPERATION_BINDING = 650000,
  ASYNCAPI2_MQTT5_SERVER_BINDING = 660000,

  ASYNCAPI2_NATS_CHANNEL_BINDING = 670000,
  ASYNCAPI2_NATS_MESSAGE_BINDING = 680000,

  ASYNCAPI2_NATS_OPERATION_BINDING = 690000,
  ASYNCAPI2_NATS_OPERATION_BINDING_FIELD_QUEUE_TYPE = 690100,
  ASYNCAPI2_NATS_OPERATION_BINDING_FIELD_QUEUE_MAX_LENGTH,
  ASYNCAPI2_NATS_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 690200,

  ASYNCAPI2_NATS_SERVER_BINDING = 700000,

  ASYNCAPI2_REDIS_CHANNEL_BINDING = 710000,
  ASYNCAPI2_REDIS_MESSAGE_BINDING = 720000,
  ASYNCAPI2_REDIS_OPERATION_BINDING = 730000,
  ASYNCAPI2_REDIS_SERVER_BINDING = 740000,

  ASYNCAPI2_SNS_CHANNEL_BINDING = 750000,
  ASYNCAPI2_SNS_MESSAGE_BINDING = 760000,
  ASYNCAPI2_SNS_OPERATION_BINDING = 770000,
  ASYNCAPI2_SNS_SERVER_BINDING = 780000,

  ASYNCAPI2_SOLACE_CHANNEL_BINDING = 790000,
  ASYNCAPI2_SOLACE_MESSAGE_BINDING = 800000,

  ASYNCAPI2_SOLACE_OPERATION_BINDING = 810000,
  ASYNCAPI2_SOLACE_OPERATION_BINDING_FIELD_DESTINATIONS_TYPE = 810100,
  ASYNCAPI2_SOLACE_OPERATION_BINDING_FIELD_BINDING_VERSION_TYPE = 810200,

  ASYNCAPI2_SOLACE_SERVER_BINDING = 820000,
  ASYNCAPI2_SOLACE_SERVER_BINDING_FIELD_MSG_VPN_TYPE = 820100,
  ASYNCAPI2_SOLACE_SERVER_BINDING_FIELD_BINDING_VERSION_TYPE = 820200,

  ASYNCAPI2_SQS_CHANNEL_BINDING = 830000,
  ASYNCAPI2_SQS_MESSAGE_BINDING = 840000,
  ASYNCAPI2_SQS_OPERATION_BINDING = 850000,
  ASYNCAPI2_SQS_SERVER_BINDING = 860000,

  ASYNCAPI2_STOMP_CHANNEL_BINDING = 870000,
  ASYNCAPI2_STOMP_MESSAGE_BINDING = 880000,
  ASYNCAPI2_STOMP_OPERATION_BINDING = 890000,
  ASYNCAPI2_STOMP_SERVER_BINDING = 900000,

  ASYNCAPI2_WEB_SOCKET_CHANNEL_BINDING = 910000,
  ASYNCAPI2_WEB_SOCKET_CHANNEL_BINDING_FIELD_METHOD_TYPE = 910100,
  ASYNCAPI2_WEB_SOCKET_CHANNEL_BINDING_FIELD_QUERY_TYPE = 910200,
  ASYNCAPI2_WEB_SOCKET_CHANNEL_BINDING_FIELD_HEADERS_TYPE = 910300,
  ASYNCAPI2_WEB_SOCKET_CHANNEL_BINDING_FIELD_BINDING_VERSION_TYPE = 910400,

  ASYNCAPI2_IBMMQ_CHANNEL_BINDING = 920000,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_DESTINATION_TYPE_EQUALS = 920100,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_QUEUE_TYPE = 920200,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_QUEUE_REQUIRED,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_TOPIC_TYPE = 920300,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_TOPIC_REQUIRED,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_MAX_MSG_LENGTH_TYPE = 920400,
  ASYNCAPI2_IBMMQ_CHANNEL_BINDING_FIELD_BINDING_VERSION_TYPE = 920500,

  ASYNCAPI2_IBMMQ_MESSAGE_BINDING = 930000,
  ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_TYPE_EQUALS = 930100,
  ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_HEADERS_TYPE = 930200,
  ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_DESCRIPTION_TYPE = 930300,
  ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_EXPIRY_TYPE = 930400,
  ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_BINDING_VERSION_TYPE = 930500,

  ASYNCAPI2_IBMMQ_SERVER_BINDING = 940000,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_GROUP_ID_TYPE = 940100,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_CCDT_QUEUE_MANAGER_NAME_TYPE = 940200,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_CIPHER_SPEC_TYPE = 940300,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_MULTI_ENDPOINT_SERVER_TYPE = 940400,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_HEART_BEAT_INTERVAL_TYPE = 940500,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_HEART_BEAT_INTERVAL_MAXIMUM,
  ASYNCAPI2_IBMMQ_SERVER_BINDING_FIELD_BINDING_VERSION_TYPE = 940600,

  OPENAPI2 = 3000000,

  OPENAPI2_CONTACT = 3010000,

  OPENAPI2_INFO = 3020000,

  OPENAPI3_0 = 5000000,

  OPENAPI3_0_OPENAPI_VALUE_PATTERN_3_0_0 = 5000100,
  OPENAPI3_0_OPENAPI_VALUE_PATTERN_3_0_1,
  OPENAPI3_0_OPENAPI_VALUE_PATTERN_3_0_2,
  OPENAPI3_0_OPENAPI_VALUE_PATTERN_3_0_3,

  OPENAPI3_0_OPEN_API = 5010000,
  OPENAPI3_0_OPEN_API_FIELD_INFO_TYPE = 5010100,
  OPENAPI3_0_OPEN_API_FIELD_INFO_TYPE_REQUIRED,
  OPENAPI3_0_OPEN_API_FIELD_SERVERS_TYPE = 5010200,
  OPENAPI3_0_OPEN_API_FIELD_SERVERS_ITEMS_TYPE,
  OPENAPI3_0_OPEN_API_FIELD_PATHS_TYPE = 5010300,
  OPENAPI3_0_OPEN_API_FIELD_PATHS_REQUIRED,
  OPENAPI3_0_OPEN_API_FIELD_COMPONENTS_TYPE = 5010400,
  OPENAPI3_0_OPEN_API_FIELD_SECURITY_TYPE = 5010500,
  OPENAPI3_0_OPEN_API_FIELD_SECURITY_ITEMS_TYPE,
  OPENAPI3_0_OPEN_API_FIELD_TAGS_TYPE = 5010600,
  OPENAPI3_0_OPEN_API_FIELD_TAGS_ITEMS_TYPE,
  OPENAPI3_0_OPEN_API_FIELD_EXTERNAL_DOCS_TYPE = 5010700,
  OPENAPI3_0_INFO_FIELD_VERSION_TYPE = 5010800,
  OPENAPI3_0_INFO_FIELD_VERSION_REQUIRED,

  OPENAPI3_0_INFO = 5020000,
  OPENAPI3_0_INFO_FIELD_TITLE_TYPE = 5020100,
  OPENAPI3_0_INFO_FIELD_TITLE_REQUIRED,
  OPENAPI3_0_INFO_FIELD_DESCRIPTION_TYPE = 5020200,
  OPENAPI3_0_INFO_FIELD_TERMS_OF_SERVICE_TYPE = 5020300,
  OPENAPI3_0_INFO_FIELD_TERMS_OF_SERVICE_FORMAT_URI,
  OPENAPI3_0_INFO_FIELD_CONTACT_TYPE = 5020400,
  OPENAPI3_0_INFO_FIELD_LICENSE_TYPE = 5020500,

  OPENAPI3_0_CONTACT = 5030000,
  OPENAPI3_0_CONTACT_FIELD_NAME_TYPE = 5030100,
  OPENAPI3_0_CONTACT_FIELD_URL_FORMAT_URI = 5030200,
  OPENAPI3_0_CONTACT_FIELD_EMAIL_FORMAT_EMAIL = 5030300,

  OPENAPI3_0_LICENSE = 5040000,
  OPENAPI3_0_LICENSE_FIELD_NAME_TYPE = 5040100,
  OPENAPI3_0_LICENSE_FIELD_NAME_REQUIRED,
  OPENAPI3_0_LICENSE_FIELD_URL_FORMAT_URI = 5040200,

  OPENAPI3_0_EXTERNAL_DOCUMENTATION = 5050000,
  OPENAPI3_0_EXTERNAL_DOCUMENTATION_FIELD_DESCRIPTION_TYPE = 5050100,
  OPENAPI3_0_EXTERNAL_DOCUMENTATION_FIELD_URL_FORMAT_URI = 5050200,
  OPENAPI3_0_EXTERNAL_DOCUMENTATION_FIELD_URL_REQUIRED,

  OPENAPI3_0_COMPONENTS = 5060000,
  OPENAPI3_0_COMPONENTS_KEYS_PATTERN,
  OPENAPI3_0_COMPONENTS_FIELD_SCHEMAS_VALUES_TYPE = 5060100,
  OPENAPI3_0_COMPONENTS_FIELD_RESPONSES_VALUES_TYPE = 5060200,
  OPENAPI3_0_COMPONENTS_FIELD_PARAMETERS_VALUES_TYPE = 5060300,
  OPENAPI3_0_COMPONENTS_FIELD_EXAMPLES_VALUES_TYPE = 5060400,
  OPENAPI3_0_COMPONENTS_FIELD_REQUEST_BODIES_VALUES_TYPE = 5060500,
  OPENAPI3_0_COMPONENTS_FIELD_HEADERS_VALUES_TYPE = 5060600,
  OPENAPI3_0_COMPONENTS_FIELD_SECURITY_SCHEMES_VALUES_TYPE = 5060700,
  OPENAPI3_0_COMPONENTS_FIELD_LINKS_VALUES_TYPE = 5060800,
  OPENAPI3_0_COMPONENTS_FIELD_CALLBACKS_VALUES_TYPE = 5060900,

  OPENAPI3_O_SERVER = 5070000,
  OPENAPI3_O_SERVER_FIELD_URL_FORMAT_URI = 5070100,
  OPENAPI3_O_SERVER_FIELD_URL_REQUIRED,
  OPENAPI3_O_SERVER_FIELD_DESCRIPTION_TYPE = 5070200,
  OPENAPI3_O_SERVER_FIELD_VARIABLES_VALUES_TYPE = 5070300,

  OPENAPI3_O_SERVER_VARIABLE = 5080000,
  OPENAPI3_O_SERVER_VARIABLE_FIELD_ENUM_TYPE = 5080100,
  OPENAPI3_O_SERVER_VARIABLE_FIELD_DEFAULT_TYPE = 5080200,
  OPENAPI3_O_SERVER_VARIABLE_FIELD_DEFAULT_REQUIRED,
  OPENAPI3_O_SERVER_VARIABLE_FIELD_DESCRIPTION_TYPE = 5080300,

  OPENAPI_3_0_PATHS = 5090000,
  OPENAPI_3_0_PATHS_KEYS_PATTERN,
  OPENAPI_3_0_PATHS_VALUES_PATTERN,

  OPENAPI3_1 = 7000000,

  OPENAPI3_1_OPENAPI_VALUE_PATTERN_3_1_0 = 7000100,

  OPENAPI3_1_INFO = 7010000,
  OPENAPI3_1_INFO_FIELD_SUMMARY_TYPE = 7010100,

  ADS = 8000000,
  ADS_INFO = 8010000,
  ADS_INFO_REQUIRED = 8010010,
  ADS_INFO_OBJECT,
  ADS_INFO_INFO_FIELD_DESCRIPTION_TYPE = 8010100,
  ADS_INFO_INFO_FIELD_TITLE_TYPE = 8010200,
  ADS_INFO_INFO_FIELD_TITLE_REQUIRED,

  ADS_MAIN = 8020000,
  ADS_MAIN_VERSION = 8020100,
  ADS_MAIN_VERSION_REQUIRED,
}

export default ApilintCodes;
