import OpenApi3_1Visitor from './visitors/open-api-3-1';
import OpenapiVisitor from './visitors/open-api-3-1/OpenapiVisitor';
import SpecificationExtensionVisitor from './visitors/SpecificationExtensionVisitor';
import InfoVisitor from './visitors/open-api-3-1/info';
import InfoTitleVisitor from './visitors/open-api-3-1/info/TitleVisitor';
import InfoDescriptionVisitor from './visitors/open-api-3-1/info/DescriptionVisitor';
import InfoSummaryVisitor from './visitors/open-api-3-1/info/SummaryVisitor';
import InfoTermsOfServiceVisitor from './visitors/open-api-3-1/info/TermsOfServiceVisitor';
import InfoVersionVisitor from './visitors/open-api-3-1/info/VersionVisitor';
import ContactVisitor from './visitors/open-api-3-1/contact';
import ContactNameVisitor from './visitors/open-api-3-1/contact/NameVisitor';
import ContactUrlVisitor from './visitors/open-api-3-1/contact/UrlVisitor';
import ContactEmailVisitor from './visitors/open-api-3-1/contact/EmailVisitor';
import LicenseVisitor from './visitors/open-api-3-1/license';
import LicenseNameVisitor from './visitors/open-api-3-1/license/NameVisitor';
import LicenseIdentifierVisitor from './visitors/open-api-3-1/license/IdentifierVisitor';
import LicenseUrlVisitor from './visitors/open-api-3-1/license/UrlVisitor';
import JsonSchemaDialectVisitor from './visitors/open-api-3-1/JsonSchemaDialectVisitor';
import ServerVisitor from './visitors/open-api-3-1/server';
import ServerUrlVisitor from './visitors/open-api-3-1/server/UrlVisitor';
import ServerDescriptionVisitor from './visitors/open-api-3-1/server/DescriptionVisitor';
import ServersVisitor from './visitors/open-api-3-1/ServersVisitor';
import ServerVariableVisitor from './visitors/open-api-3-1/server-variable';
import ServerVariableEnumVisitor from './visitors/open-api-3-1/server-variable/EnumVisitor';
import ServerVariableDefaultVisitor from './visitors/open-api-3-1/server-variable/DefaultVisitor';
import ServerVariableDescriptionVisitor from './visitors/open-api-3-1/server-variable/DescriptionVisitor';
import ServerVariablesVisitor from './visitors/open-api-3-1/server/VariablesVisitor';
import FallbackVisitor from './visitors/FallbackVisitor';
import SecurityRequirementVisitor from './visitors/open-api-3-1/security-requirement';
import SecurityVisitor from './visitors/open-api-3-1/SecurityVisitor';
import ComponentsVisitor from './visitors/open-api-3-1/components';
import ReferenceVisitor from './visitors/open-api-3-1/reference';
import Reference$RefVisitor from './visitors/open-api-3-1/reference/$RefVisitor';
import ReferenceSummaryVisitor from './visitors/open-api-3-1/reference/SummaryVisitor';
import ReferenceDescriptionVisitor from './visitors/open-api-3-1/reference/DescriptionVisitor';
import ParameterVisitor from './visitors/open-api-3-1/parameter';
import ParameterNameVisitor from './visitors/open-api-3-1/parameter/NameVisitor';
import ParameterInVisitor from './visitors/open-api-3-1/parameter/InVisitor';
import ParameterDescriptionVisitor from './visitors/open-api-3-1/parameter/DescriptionVisitor';
import ParameterRequiredVisitor from './visitors/open-api-3-1/parameter/RequiredVisitor';
import ParameterDeprecatedVisitor from './visitors/open-api-3-1/parameter/DeprecatedVisitor';
import ParameterAllowEmptyValueVisitor from './visitors/open-api-3-1/parameter/AllowEmptyValueVisitor';
import ParameterStyleVisitor from './visitors/open-api-3-1/parameter/StyleVisitor';
import ParameterExplodeVisitor from './visitors/open-api-3-1/parameter/ExplodeVisitor';
import ParameterAllowReservedVisitor from './visitors/open-api-3-1/parameter/AllowReservedVisitor';
import SchemaVisitor from './visitors/open-api-3-1/schema';
import Schema$schemaVisitor from './visitors/open-api-3-1/schema/$schemaVisitor';
import Schema$vocabularyVisitor from './visitors/open-api-3-1/schema/$vocabularyVisitor';
import Schema$idVisitor from './visitors/open-api-3-1/schema/$idVisitor';
import Schema$anchorVisitor from './visitors/open-api-3-1/schema/$anchorVisitor';
import Schema$dynamicAnchorVisitor from './visitors/open-api-3-1/schema/$dynamicAnchorVisitor';
import Schema$dynamicRefVisitor from './visitors/open-api-3-1/schema/$dynamicRefVisitor';
import Schema$refVisitor from './visitors/open-api-3-1/schema/$refVisitor';
import Schema$defsVisitor from './visitors/open-api-3-1/schema/$defsVisitor';
import Schema$commentVisitor from './visitors/open-api-3-1/schema/$commentVisitor';
import SchemaAllOfVisitor from './visitors/open-api-3-1/schema/AllOfVisitor';
import SchemaAnyOfVisitor from './visitors/open-api-3-1/schema/AnyOfVisitor';
import SchemaOneOfVisitor from './visitors/open-api-3-1/schema/OneOfVisitor';
import SchemaDependantSchemasVisitor from './visitors/open-api-3-1/schema/DependentSchemasVisitor';
import SchemaPrefixItemsVisitor from './visitors/open-api-3-1/schema/PrefixItemsVisitor';
import SchemaPropertiesVisitor from './visitors/open-api-3-1/schema/PropertiesVisitor';
import SchemaPatternPropertiesVisitor from './visitors/open-api-3-1/schema/PatternProperties';
import SchemaExampleVisitor from './visitors/open-api-3-1/schema/ExampleVisitor';
import DiscriminatorVisitor from './visitors/open-api-3-1/distriminator';
import DiscriminatorPropertyNameVisitor from './visitors/open-api-3-1/distriminator/PropertyNameVisitor';
import DiscriminatorMappingVisitor from './visitors/open-api-3-1/distriminator/MappingVisitor';
import XmlVisitor from './visitors/open-api-3-1/xml';
import XmlNameVisitor from './visitors/open-api-3-1/xml/NameVisitor';
import XmlNamespaceVisitor from './visitors/open-api-3-1/xml/NamespaceVisitor';
import XmlPrefixVisitor from './visitors/open-api-3-1/xml/PrefixVisitor';
import XmlAttributeVisitor from './visitors/open-api-3-1/xml/AttributeVisitor';
import XmlWrappedVisitor from './visitors/open-api-3-1/xml/WrappedVisitor';
import ParameterExampleVisitor from './visitors/open-api-3-1/parameter/ExampleVisitor';
import ExamplesVisitor from './visitors/open-api-3-1/ExamplesVisitor';
import ContentVisitor from './visitors/open-api-3-1/ContentVisitor';
import ComponentSchemasVisitor from './visitors/open-api-3-1/components/SchemasVisitor';
import ComponentParametersVisitor from './visitors/open-api-3-1/components/ParametersVisitor';
import ExternalDocumentationVisitor from './visitors/open-api-3-1/external-documentation';
import ExternalDocumentationDescriptionVisitor from './visitors/open-api-3-1/external-documentation/DescriptionVisitor';
import ExternalDocumentationUrlVisitor from './visitors/open-api-3-1/external-documentation/UrlVisitor';
import PathsVisitor from './visitors/open-api-3-1/paths';
import RequestBodyVisitor from './visitors/open-api-3-1/request-body';
import CallbackVisitor from './visitors/open-api-3-1/callback';
import ResponseVisitor from './visitors/open-api-3-1/response';
import MediaTypeVisitor from './visitors/open-api-3-1/media-type';
import ResponsesVisitor from './visitors/open-api-3-1/responses';
import ResponsesDefaultVisitor from './visitors/open-api-3-1/responses/DefaultVisitor';
import OperationVisitor from './visitors/open-api-3-1/operation';
import OperationTagsVisitor from './visitors/open-api-3-1/operation/TagsVisitor';
import OperationSummaryVisitor from './visitors/open-api-3-1/operation/SummaryVisitor';
import OperationDescriptionVisitor from './visitors/open-api-3-1/operation/DescriptionVisitor';
import OperationOperationIdVisitor from './visitors/open-api-3-1/operation/OperationIdVisitor';
import OperationRequestBodyVisitor from './visitors/open-api-3-1/operation/RequestBodyVisitor';
import OperationCallbacksVisitor from './visitors/open-api-3-1/operation/CallbacksVisitor';
import OperationDeprecatedVisitor from './visitors/open-api-3-1/operation/DeprecatedVisitor';
import ParametersVisitor from './visitors/open-api-3-1/ParametersVisitor';
import PathItemVisitor from './visitors/open-api-3-1/path-item';
import PathItem$RefVisitor from './visitors/open-api-3-1/path-item/$RefVisitor';
import PathItemSummaryVisitor from './visitors/open-api-3-1/path-item/SummaryVisitor';
import PathItemDescriptionVisitor from './visitors/open-api-3-1/path-item/DescriptionVisitor';

/**
 * Specification object allows us to have complete control over visitors
 * when traversing the ApiDOM.
 * Specification also allows us to create amended refractors from
 * existing ones by manipulating it.
 *
 * Note: Specification object allows to use absolute internal JSON pointers.
 */
const specification = {
  visitors: {
    value: FallbackVisitor,
    document: {
      objects: {
        OpenApi: {
          $visitor: OpenApi3_1Visitor,
          fixedFields: {
            openapi: OpenapiVisitor,
            info: {
              $ref: '#/visitors/document/objects/Info',
            },
            jsonSchemaDialect: JsonSchemaDialectVisitor,
            servers: ServersVisitor,
            paths: {
              $ref: '#/visitors/document/objects/Paths',
            },
            components: {
              $ref: '#/visitors/document/objects/Components',
            },
            security: SecurityVisitor,
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation',
            },
          },
        },
        Info: {
          $visitor: InfoVisitor,
          fixedFields: {
            title: InfoTitleVisitor,
            description: InfoDescriptionVisitor,
            summary: InfoSummaryVisitor,
            termsOfService: InfoTermsOfServiceVisitor,
            version: InfoVersionVisitor,
            contact: {
              $ref: '#/visitors/document/objects/Contact',
            },
            license: {
              $ref: '#/visitors/document/objects/License',
            },
          },
        },
        Contact: {
          $visitor: ContactVisitor,
          fixedFields: {
            name: ContactNameVisitor,
            url: ContactUrlVisitor,
            email: ContactEmailVisitor,
          },
        },
        License: {
          $visitor: LicenseVisitor,
          fixedFields: {
            name: LicenseNameVisitor,
            identifier: LicenseIdentifierVisitor,
            url: LicenseUrlVisitor,
          },
        },
        Server: {
          $visitor: ServerVisitor,
          fixedFields: {
            url: ServerUrlVisitor,
            description: ServerDescriptionVisitor,
            variables: ServerVariablesVisitor,
          },
        },
        ServerVariable: {
          $visitor: ServerVariableVisitor,
          fixedFields: {
            enum: ServerVariableEnumVisitor,
            default: ServerVariableDefaultVisitor,
            description: ServerVariableDescriptionVisitor,
          },
        },
        Components: {
          $visitor: ComponentsVisitor,
          fixedFields: {
            schemas: ComponentSchemasVisitor,
            parameters: ComponentParametersVisitor,
          },
        },
        Paths: {
          $visitor: PathsVisitor,
        },
        PathItem: {
          $visitor: PathItemVisitor,
          fixedFields: {
            $ref: PathItem$RefVisitor,
            summary: PathItemSummaryVisitor,
            description: PathItemDescriptionVisitor,
            get: {
              $ref: '#/visitors/document/objects/Operation',
            },
            put: {
              $ref: '#/visitors/document/objects/Operation',
            },
            post: {
              $ref: '#/visitors/document/objects/Operation',
            },
            delete: {
              $ref: '#/visitors/document/objects/Operation',
            },
            options: {
              $ref: '#/visitors/document/objects/Operation',
            },
            head: {
              $ref: '#/visitors/document/objects/Operation',
            },
            patch: {
              $ref: '#/visitors/document/objects/Operation',
            },
            trace: {
              $ref: '#/visitors/document/objects/Operation',
            },
            servers: ServersVisitor,
            parameters: ParametersVisitor,
          },
        },
        Operation: {
          $visitor: OperationVisitor,
          fixedFields: {
            tags: OperationTagsVisitor,
            summary: OperationSummaryVisitor,
            description: OperationDescriptionVisitor,
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation',
            },
            operationId: OperationOperationIdVisitor,
            parameters: ParametersVisitor,
            requestBody: OperationRequestBodyVisitor,
            responses: {
              $ref: '#/visitors/document/objects/Responses',
            },
            callbacks: OperationCallbacksVisitor,
            deprecated: OperationDeprecatedVisitor,
            security: SecurityVisitor,
            servers: ServersVisitor,
          },
        },
        ExternalDocumentation: {
          $visitor: ExternalDocumentationVisitor,
          fixedFields: {
            description: ExternalDocumentationDescriptionVisitor,
            url: ExternalDocumentationUrlVisitor,
          },
        },
        Parameter: {
          $visitor: ParameterVisitor,
          fixedFields: {
            name: ParameterNameVisitor,
            in: ParameterInVisitor,
            description: ParameterDescriptionVisitor,
            required: ParameterRequiredVisitor,
            deprecated: ParameterDeprecatedVisitor,
            allowEmptyValue: ParameterAllowEmptyValueVisitor,
            style: ParameterStyleVisitor,
            explode: ParameterExplodeVisitor,
            allowReserved: ParameterAllowReservedVisitor,
            schema: {
              $ref: '#/visitors/document/objects/Schema',
            },
            example: ParameterExampleVisitor,
            examples: ExamplesVisitor,
            content: ContentVisitor,
          },
        },
        RequestBody: {
          $visitor: RequestBodyVisitor,
          fixedFields: {},
        },
        MediaType: {
          $visitor: MediaTypeVisitor,
          fixedFields: {
            schema: {
              $ref: '#/visitors/document/objects/Schema',
            },
          },
        },
        Responses: {
          $visitor: ResponsesVisitor,
          fixedFields: {
            default: ResponsesDefaultVisitor,
          },
        },
        Response: {
          $visitor: ResponseVisitor,
          fixedFields: {
            content: ContentVisitor,
          },
        },
        Callback: {
          $visitor: CallbackVisitor,
          fixedFields: {},
        },
        Reference: {
          $visitor: ReferenceVisitor,
          fixedFields: {
            $ref: Reference$RefVisitor,
            summary: ReferenceSummaryVisitor,
            description: ReferenceDescriptionVisitor,
          },
        },
        Schema: {
          $visitor: SchemaVisitor,
          fixedFields: {
            // core vocabulary
            $schema: Schema$schemaVisitor,
            $vocabulary: Schema$vocabularyVisitor,
            $id: Schema$idVisitor,
            $anchor: Schema$anchorVisitor,
            $dynamicAnchor: Schema$dynamicAnchorVisitor,
            $dynamicRef: Schema$dynamicRefVisitor,
            $ref: Schema$refVisitor,
            $defs: Schema$defsVisitor,
            $comment: Schema$commentVisitor,
            // applicator vocabulary
            allOf: SchemaAllOfVisitor,
            anyOf: SchemaAnyOfVisitor,
            oneOf: SchemaOneOfVisitor,
            not: {
              $ref: '#/visitors/document/objects/Schema',
            },
            if: {
              $ref: '#/visitors/document/objects/Schema',
            },
            then: {
              $ref: '#/visitors/document/objects/Schema',
            },
            else: {
              $ref: '#/visitors/document/objects/Schema',
            },
            dependentSchemas: SchemaDependantSchemasVisitor,
            prefixItems: SchemaPrefixItemsVisitor,
            items: {
              $ref: '#/visitors/document/objects/Schema',
            },
            contains: {
              $ref: '#/visitors/document/objects/Schema',
            },
            properties: SchemaPropertiesVisitor,
            patternProperties: SchemaPatternPropertiesVisitor,
            additionalProperties: {
              $ref: '#/visitors/document/objects/Schema',
            },
            propertyNames: {
              $ref: '#/visitors/document/objects/Schema',
            },
            // OAS base vocabulary
            discriminator: {
              $ref: '#/visitors/document/objects/Discriminator',
            },
            xml: {
              $ref: '#/visitors/document/objects/XML',
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation',
            },
            example: SchemaExampleVisitor,
          },
        },
        Discriminator: {
          $visitor: DiscriminatorVisitor,
          fixedFields: {
            propertyName: DiscriminatorPropertyNameVisitor,
            mapping: DiscriminatorMappingVisitor,
          },
        },
        XML: {
          $visitor: XmlVisitor,
          fixedFields: {
            name: XmlNameVisitor,
            namespace: XmlNamespaceVisitor,
            prefix: XmlPrefixVisitor,
            attribute: XmlAttributeVisitor,
            wrapped: XmlWrappedVisitor,
          },
        },
        SecurityRequirement: {
          $visitor: SecurityRequirementVisitor,
        },
      },
      extension: {
        $visitor: SpecificationExtensionVisitor,
      },
    },
  },
};

export default specification;
