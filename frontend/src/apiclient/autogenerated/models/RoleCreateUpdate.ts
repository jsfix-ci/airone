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
/**
 *
 * @export
 * @interface RoleCreateUpdate
 */
export interface RoleCreateUpdate {
  /**
   *
   * @type {boolean}
   * @memberof RoleCreateUpdate
   */
  isActive?: boolean;
  /**
   *
   * @type {string}
   * @memberof RoleCreateUpdate
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RoleCreateUpdate
   */
  description?: string;
  /**
   *
   * @type {Array<number>}
   * @memberof RoleCreateUpdate
   */
  users?: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof RoleCreateUpdate
   */
  groups?: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof RoleCreateUpdate
   */
  adminUsers?: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof RoleCreateUpdate
   */
  adminGroups?: Array<number>;
}

export function RoleCreateUpdateFromJSON(json: any): RoleCreateUpdate {
  return RoleCreateUpdateFromJSONTyped(json, false);
}

export function RoleCreateUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RoleCreateUpdate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    isActive: !exists(json, "is_active") ? undefined : json["is_active"],
    name: json["name"],
    description: !exists(json, "description") ? undefined : json["description"],
    users: !exists(json, "users") ? undefined : json["users"],
    groups: !exists(json, "groups") ? undefined : json["groups"],
    adminUsers: !exists(json, "admin_users") ? undefined : json["admin_users"],
    adminGroups: !exists(json, "admin_groups")
      ? undefined
      : json["admin_groups"],
  };
}

export function RoleCreateUpdateToJSON(value?: RoleCreateUpdate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    is_active: value.isActive,
    name: value.name,
    description: value.description,
    users: value.users,
    groups: value.groups,
    admin_users: value.adminUsers,
    admin_groups: value.adminGroups,
  };
}
