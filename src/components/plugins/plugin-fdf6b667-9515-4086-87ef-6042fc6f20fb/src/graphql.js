import gql from 'graphql-tag';

export const GET_GOOGLE_AUTHORIZE = gql`
    query GetGoogleAuthorize($designId: String!, $pluginId: String!, $settingsId: String!) {
        getGoogleAuthorize(designId: $designId, pluginId: $pluginId, settingsId: $settingsId) {
            success
            data
        }
    }
`;

export const GET_GOOGLE_PROFILE = gql`
    query GetGoogleProfile($designId: String!, $pluginId: String!, $settingsId: String!) {
        getGoogleProfile(designId: $designId, pluginId: $pluginId, settingsId: $settingsId) {
            success
            data
        }
    }
`;

export const GET_GOOGLE_SPREADSHEET_META = gql`
    query GetGoogleSpreadsheetMeta(
        $designId: String!
        $pluginId: String!
        $settingsId: String!
        $spreadsheetId: String!
    ) {
        getGoogleSpreadsheetMeta(
            designId: $designId
            pluginId: $pluginId
            settingsId: $settingsId
            spreadsheetId: $spreadsheetId
        ) {
            success
            data
        }
    }
`;
