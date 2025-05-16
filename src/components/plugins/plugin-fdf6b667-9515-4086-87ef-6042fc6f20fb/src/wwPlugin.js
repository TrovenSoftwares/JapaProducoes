
export default {
    /*=============================================m_ÔÔ_m=============================================\
        Collection API
    \================================================================================================*/
    /*=============================================m_ÔÔ_m=============================================\
        Google Sheets API
    \================================================================================================*/
    async authorize() {
        const { data } = await wwLib.$apollo.query({
            query: GET_GOOGLE_AUTHORIZE,
            variables: {
                designId: wwLib.wwWebsiteData.getDesign().info.id,
                pluginId: this.id,
                settingsId: this.settings.id,
            },
            fetchPolicy: 'no-cache',
        });
        return data.getGoogleAuthorize.data;
    },
    async getProfile() {
        const { data } = await wwLib.$apollo.query({
            query: GET_GOOGLE_PROFILE,
            variables: {
                designId: wwLib.wwWebsiteData.getDesign().info.id,
                pluginId: this.id,
                settingsId: this.settings.id,
            },
            fetchPolicy: 'no-cache',
        });
        return data.getGoogleProfile.data;
    },
};
