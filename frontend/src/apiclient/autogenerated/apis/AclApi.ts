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

import * as runtime from "../runtime";
import { ACL, ACLFromJSON, ACLToJSON } from "../models";

export interface AclApiV2AclsRetrieveRequest {
  id: number;
}

export interface AclApiV2AclsUpdateRequest {
  id: number;
  aCL: ACL;
}

/**
 *
 */
export class AclApi extends runtime.BaseAPI {
  /**
   */
  async aclApiV2AclsRetrieveRaw(
    requestParameters: AclApiV2AclsRetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ACL>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling aclApiV2AclsRetrieve."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters["Authorization"] =
        "Basic " +
        btoa(this.configuration.username + ":" + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/acl/api/v2/acls/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ACLFromJSON(jsonValue)
    );
  }

  /**
   */
  async aclApiV2AclsRetrieve(
    requestParameters: AclApiV2AclsRetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<ACL> {
    const response = await this.aclApiV2AclsRetrieveRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async aclApiV2AclsUpdateRaw(
    requestParameters: AclApiV2AclsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ACL>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling aclApiV2AclsUpdate."
      );
    }

    if (requestParameters.aCL === null || requestParameters.aCL === undefined) {
      throw new runtime.RequiredError(
        "aCL",
        "Required parameter requestParameters.aCL was null or undefined when calling aclApiV2AclsUpdate."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters["Authorization"] =
        "Basic " +
        btoa(this.configuration.username + ":" + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/acl/api/v2/acls/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: ACLToJSON(requestParameters.aCL),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ACLFromJSON(jsonValue)
    );
  }

  /**
   */
  async aclApiV2AclsUpdate(
    requestParameters: AclApiV2AclsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<ACL> {
    const response = await this.aclApiV2AclsUpdateRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}