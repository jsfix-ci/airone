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
  EntryRetrieveValueAsGroup,
  EntryRetrieveValueAsGroupFromJSON,
  EntryRetrieveValueAsGroupFromJSONTyped,
  EntryRetrieveValueAsGroupToJSON,
} from "./EntryRetrieveValueAsGroup";
import {
  EntryRetrieveValueAsObject,
  EntryRetrieveValueAsObjectFromJSON,
  EntryRetrieveValueAsObjectFromJSONTyped,
  EntryRetrieveValueAsObjectToJSON,
} from "./EntryRetrieveValueAsObject";
import {
  EntryRetrieveValueAsObjectSchema,
  EntryRetrieveValueAsObjectSchemaFromJSON,
  EntryRetrieveValueAsObjectSchemaFromJSONTyped,
  EntryRetrieveValueAsObjectSchemaToJSON,
} from "./EntryRetrieveValueAsObjectSchema";

/**
 *
 * @export
 * @interface EntryRetrieveValue
 */
export interface EntryRetrieveValue {
  /**
   *
   * @type {EntryRetrieveValueAsObject}
   * @memberof EntryRetrieveValue
   */
  asObject?: EntryRetrieveValueAsObject | null;
  /**
   *
   * @type {string}
   * @memberof EntryRetrieveValue
   */
  asString?: string;
  /**
   *
   * @type {{ [key: string]: EntryRetrieveValueAsObject; }}
   * @memberof EntryRetrieveValue
   */
  asNamedObject?: { [key: string]: EntryRetrieveValueAsObject };
  /**
   *
   * @type {Array<EntryRetrieveValueAsObject>}
   * @memberof EntryRetrieveValue
   */
  asArrayObject?: Array<EntryRetrieveValueAsObject>;
  /**
   *
   * @type {Array<string>}
   * @memberof EntryRetrieveValue
   */
  asArrayString?: Array<string>;
  /**
   *
   * @type {Array<{ [key: string]: object; }>}
   * @memberof EntryRetrieveValue
   */
  asArrayNamedObject?: Array<{ [key: string]: object }>;
  /**
   *
   * @type {Array<EntryRetrieveValueAsObjectSchema>}
   * @memberof EntryRetrieveValue
   */
  asArrayGroup?: Array<EntryRetrieveValueAsObjectSchema>;
  /**
   *
   * @type {boolean}
   * @memberof EntryRetrieveValue
   */
  asBoolean?: boolean;
  /**
   *
   * @type {EntryRetrieveValueAsGroup}
   * @memberof EntryRetrieveValue
   */
  asGroup?: EntryRetrieveValueAsGroup | null;
}

export function EntryRetrieveValueFromJSON(json: any): EntryRetrieveValue {
  return EntryRetrieveValueFromJSONTyped(json, false);
}

export function EntryRetrieveValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EntryRetrieveValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    asObject: !exists(json, "as_object")
      ? undefined
      : EntryRetrieveValueAsObjectFromJSON(json["as_object"]),
    asString: !exists(json, "as_string") ? undefined : json["as_string"],
    asNamedObject: !exists(json, "as_named_object")
      ? undefined
      : mapValues(json["as_named_object"], EntryRetrieveValueAsObjectFromJSON),
    asArrayObject: !exists(json, "as_array_object")
      ? undefined
      : (json["as_array_object"] as Array<any>).map(
          EntryRetrieveValueAsObjectFromJSON
        ),
    asArrayString: !exists(json, "as_array_string")
      ? undefined
      : json["as_array_string"],
    asArrayNamedObject: !exists(json, "as_array_named_object")
      ? undefined
      : json["as_array_named_object"],
    asArrayGroup: !exists(json, "as_array_group")
      ? undefined
      : (json["as_array_group"] as Array<any>).map(
          EntryRetrieveValueAsObjectSchemaFromJSON
        ),
    asBoolean: !exists(json, "as_boolean") ? undefined : json["as_boolean"],
    asGroup: !exists(json, "as_group")
      ? undefined
      : EntryRetrieveValueAsGroupFromJSON(json["as_group"]),
  };
}

export function EntryRetrieveValueToJSON(
  value?: EntryRetrieveValue | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    as_object: EntryRetrieveValueAsObjectToJSON(value.asObject),
    as_string: value.asString,
    as_named_object:
      value.asNamedObject === undefined
        ? undefined
        : mapValues(value.asNamedObject, EntryRetrieveValueAsObjectToJSON),
    as_array_object:
      value.asArrayObject === undefined
        ? undefined
        : (value.asArrayObject as Array<any>).map(
            EntryRetrieveValueAsObjectToJSON
          ),
    as_array_string: value.asArrayString,
    as_array_named_object: value.asArrayNamedObject,
    as_array_group:
      value.asArrayGroup === undefined
        ? undefined
        : (value.asArrayGroup as Array<any>).map(
            EntryRetrieveValueAsObjectSchemaToJSON
          ),
    as_boolean: value.asBoolean,
    as_group: EntryRetrieveValueAsGroupToJSON(value.asGroup),
  };
}
