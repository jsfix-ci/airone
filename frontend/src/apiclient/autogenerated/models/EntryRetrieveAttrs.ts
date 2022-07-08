/* tslint:disable */
/* eslint-disable */
/**
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
  EntryRetrieveValue,
  EntryRetrieveValueFromJSON,
  EntryRetrieveValueFromJSONTyped,
  EntryRetrieveValueToJSON,
} from "./EntryRetrieveValue";
import {
  EntryRetrieveValueAsObjectSchema,
  EntryRetrieveValueAsObjectSchemaFromJSON,
  EntryRetrieveValueAsObjectSchemaFromJSONTyped,
  EntryRetrieveValueAsObjectSchemaToJSON,
} from "./EntryRetrieveValueAsObjectSchema";

/**
 *
 * @export
 * @interface EntryRetrieveAttrs
 */
export interface EntryRetrieveAttrs {
  /**
   *
   * @type {number}
   * @memberof EntryRetrieveAttrs
   */
  id?: number | null;
  /**
   *
   * @type {number}
   * @memberof EntryRetrieveAttrs
   */
  type?: number;
  /**
   *
   * @type {boolean}
   * @memberof EntryRetrieveAttrs
   */
  isMandatory?: boolean;
  /**
   *
   * @type {EntryRetrieveValue}
   * @memberof EntryRetrieveAttrs
   */
  value?: EntryRetrieveValue;
  /**
   *
   * @type {EntryRetrieveValueAsObjectSchema}
   * @memberof EntryRetrieveAttrs
   */
  schema?: EntryRetrieveValueAsObjectSchema;
}

export function EntryRetrieveAttrsFromJSON(json: any): EntryRetrieveAttrs {
  return EntryRetrieveAttrsFromJSONTyped(json, false);
}

export function EntryRetrieveAttrsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EntryRetrieveAttrs {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    type: !exists(json, "type") ? undefined : json["type"],
    isMandatory: !exists(json, "is_mandatory")
      ? undefined
      : json["is_mandatory"],
    value: !exists(json, "value")
      ? undefined
      : EntryRetrieveValueFromJSON(json["value"]),
    schema: !exists(json, "schema")
      ? undefined
      : EntryRetrieveValueAsObjectSchemaFromJSON(json["schema"]),
  };
}

export function EntryRetrieveAttrsToJSON(
  value?: EntryRetrieveAttrs | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    type: value.type,
    is_mandatory: value.isMandatory,
    value: EntryRetrieveValueToJSON(value.value),
    schema: EntryRetrieveValueAsObjectSchemaToJSON(value.schema),
  };
}
