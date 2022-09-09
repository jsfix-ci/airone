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
  ACLParent,
  ACLParentFromJSON,
  ACLParentFromJSONTyped,
  ACLParentToJSON,
} from "./ACLParent";

/**
 *
 * @export
 * @interface ACL
 */
export interface ACL {
  /**
   *
   * @type {number}
   * @memberof ACL
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof ACL
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof ACL
   */
  isPublic?: boolean;
  /**
   *
   * @type {number}
   * @memberof ACL
   */
  defaultPermission?: number;
  /**
   *
   * @type {number}
   * @memberof ACL
   */
  objtype?: number;
  /**
   *
   * @type {Array<{ [key: string]: any; }>}
   * @memberof ACL
   */
  readonly acltypes: Array<{ [key: string]: any }>;
  /**
   *
   * @type {Array<{ [key: string]: any; }>}
   * @memberof ACL
   */
  readonly members: Array<{ [key: string]: any }>;
  /**
   *
   * @type {Array<any>}
   * @memberof ACL
   */
  acl: Array<any>;
  /**
   *
   * @type {Array<{ [key: string]: any; }>}
   * @memberof ACL
   */
  readonly roles: Array<{ [key: string]: any }>;
  /**
   *
   * @type {ACLParent}
   * @memberof ACL
   */
  parent: ACLParent | null;
}

export function ACLFromJSON(json: any): ACL {
  return ACLFromJSONTyped(json, false);
}

export function ACLFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACL {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    isPublic: !exists(json, "is_public") ? undefined : json["is_public"],
    defaultPermission: !exists(json, "default_permission")
      ? undefined
      : json["default_permission"],
    objtype: !exists(json, "objtype") ? undefined : json["objtype"],
    acltypes: json["acltypes"],
    members: json["members"],
    acl: json["acl"],
    roles: json["roles"],
    parent: ACLParentFromJSON(json["parent"]),
  };
}

export function ACLToJSON(value?: ACL | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    is_public: value.isPublic,
    default_permission: value.defaultPermission,
    objtype: value.objtype,
    acl: value.acl,
    parent: ACLParentToJSON(value.parent),
  };
}
