export type AmplifyDependentResourcesAttributes = {
    "api": {
        "PSKAnalyticsApp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "PSKAnalyticsApp": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "SuperAdminGroupRole": "string",
            "AdminGroupRole": "string"
        }
    },
    "storage": {
        "s3pskanalyticsapp": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}