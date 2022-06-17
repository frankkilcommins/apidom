import fs from 'fs';
import path from 'path';
import { assert } from 'chai';
import { isParseResultElement, isSourceMapElement } from '@swagger-api/apidom-core';
import { mediaTypes } from '@swagger-api/apidom-ns-api-design-systems';

import File from '../../../../src/util/File';
import ApiDesignSystemsYamlParser from '../../../../src/parse/parsers/apidom-reference-parser-api-design-systems-yaml';
import { ParserError } from '../../../../src/util/errors';

describe('parsers', function () {
  context('ApiDesignSystemsYamlParser', function () {
    context('canParse', function () {
      context('given file with .yaml extension', function () {
        context('and with proper media type', function () {
          specify('should return true', function () {
            const file1 = File({
              uri: '/path/to/api-design-systems.yaml',
              mediaType: mediaTypes.latest('yaml'),
            });
            const file2 = File({
              uri: '/path/to/api-design-systems.yaml',
              mediaType: mediaTypes.latest(),
            });
            const parser = ApiDesignSystemsYamlParser();

            assert.isTrue(parser.canParse(file1));
            assert.isTrue(parser.canParse(file2));
          });
        });

        context('and with improper media type', function () {
          specify('should return false', function () {
            const file = File({
              uri: '/path/to/api-design-systems.yaml',
              mediaType: 'application/vnd.oai.openapi+json;version=3.1.0',
            });
            const parser = ApiDesignSystemsYamlParser();

            assert.isFalse(parser.canParse(file));
          });
        });
      });

      context('given file with .yml extension', function () {
        context('and with proper media type', function () {
          specify('should return true', function () {
            const file1 = File({
              uri: '/path/to/api-design-systems.yml',
              mediaType: mediaTypes.latest('yaml'),
            });
            const file2 = File({
              uri: '/path/to/api-design-systems.yml',
              mediaType: mediaTypes.latest(),
            });
            const parser = ApiDesignSystemsYamlParser();

            assert.isTrue(parser.canParse(file1));
            assert.isTrue(parser.canParse(file2));
          });
        });

        context('and with improper media type', function () {
          specify('should return false', function () {
            const file = File({
              uri: '/path/to/api-design-systems.yaml',
              mediaType: 'application/vnd.oai.openapi+json;version=3.1.0',
            });
            const parser = ApiDesignSystemsYamlParser();

            assert.isFalse(parser.canParse(file));
          });
        });
      });

      context('given file with unknown extension', function () {
        specify('should return false', function () {
          const file = File({
            uri: '/path/to/api-design-systems.txt',
            mediaType: mediaTypes.latest(),
          });
          const parser = ApiDesignSystemsYamlParser();

          assert.isFalse(parser.canParse(file));
        });
      });

      context('given file with no extension', function () {
        specify('should return false', function () {
          const file = File({
            uri: '/path/to/api-design-systems',
            mediaType: mediaTypes.latest(),
          });
          const parser = ApiDesignSystemsYamlParser();

          assert.isFalse(parser.canParse(file));
        });
      });
    });

    context('parse', function () {
      context('given API Design Systems YAML data', function () {
        specify('should return parse result', async function () {
          const url = path.join(__dirname, 'fixtures', 'api-design-systems.yaml');
          const data = fs.readFileSync(url).toString();
          const file = File({ url, data, mediaType: mediaTypes.latest() });
          const parser = ApiDesignSystemsYamlParser();
          const parseResult = await parser.parse(file);

          assert.isTrue(isParseResultElement(parseResult));
        });
      });

      context('given API Design Systems YAML data as buffer', function () {
        specify('should return parse result', async function () {
          const url = path.join(__dirname, 'fixtures', 'api-design-systems.yaml');
          const data = fs.readFileSync(url);
          const file = File({ url, data, mediaType: mediaTypes.latest() });
          const parser = ApiDesignSystemsYamlParser();
          const parseResult = await parser.parse(file);

          assert.isTrue(isParseResultElement(parseResult));
        });
      });

      context('given data that is not an API Design Systems YAML data', function () {
        specify('should throw ParserError', async function () {
          try {
            const file = File({
              uri: '/path/to/file.yaml',
              data: 1,
              mediaType: mediaTypes.latest(),
            });
            const parser = ApiDesignSystemsYamlParser();
            await parser.parse(file);
            assert.fail('should throw ParserError');
          } catch (error: any) {
            assert.instanceOf(error.cause, TypeError);
            assert.instanceOf(error, ParserError);
            assert.propertyVal(error, 'message', 'Error parsing "/path/to/file.yaml"');
          }
        });
      });

      context('given empty file', function () {
        specify('should return empty parse result', async function () {
          const file = File({
            uri: '/path/to/file.yaml',
            data: '',
            mediaType: mediaTypes.latest(),
          });
          const parser = ApiDesignSystemsYamlParser();
          const parsceResult = await parser.parse(file);

          assert.isTrue(isParseResultElement(parsceResult));
          assert.isTrue(parsceResult.isEmpty);
        });
      });

      context('sourceMap', function () {
        context('given sourceMap enabled', function () {
          specify('should decorate ApiDOM with source maps', async function () {
            const url = path.join(__dirname, 'fixtures', 'api-design-systems.yaml');
            const data = fs.readFileSync(url).toString();
            const file = File({
              url,
              data,
              mediaType: mediaTypes.latest(),
            });
            const parser = ApiDesignSystemsYamlParser({ sourceMap: true });
            const parseResult = await parser.parse(file);

            assert.isTrue(isSourceMapElement(parseResult.result?.meta.get('sourceMap')));
          });
        });

        context('given sourceMap disabled', function () {
          specify('should not decorate ApiDOM with source maps', async function () {
            const url = path.join(__dirname, 'fixtures', 'api-design-systems.yaml');
            const data = fs.readFileSync(url).toString();
            const file = File({
              url,
              data,
              mediaType: mediaTypes.latest(),
            });
            const parser = ApiDesignSystemsYamlParser({ sourceMap: false });
            const parseResult = await parser.parse(file);

            assert.isUndefined(parseResult.result?.meta.get('sourceMap'));
          });
        });
      });
    });
  });
});
