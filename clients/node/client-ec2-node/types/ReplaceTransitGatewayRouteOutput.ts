import { _UnmarshalledTransitGatewayRoute } from "./_TransitGatewayRoute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReplaceTransitGatewayRouteOutput shape
 */
export interface ReplaceTransitGatewayRouteOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the modified route.</p>
   */
  Route?: _UnmarshalledTransitGatewayRoute;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}