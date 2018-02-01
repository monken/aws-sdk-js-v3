import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DeleteObjectTaggingOutput shape
 */
export interface DeleteObjectTaggingOutput {
    /**
     * The versionId of the object the tag-set was removed from.
     */
    VersionId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}