export default {
    features: {
        auth: true,
    },
    editor: {
        settings: [
            {
                label: 'Configuration',
                icon: 'advanced',
                edit: () => import('./src/components/Configuration/SettingsEdit.vue'),
                summary: () => import('./src/components/Configuration/SettingsSummary.vue'),
                getIsValid(settings) {
                    const { domain, SPAClientId, M2MClientId } = settings.publicData;
                    const { SPAClientSecret, M2MClientSecret } = settings.privateData;
                    return !!domain && !!SPAClientId && !!SPAClientSecret && !!M2MClientId && !!M2MClientSecret;
                },
            },
        ],
        designSystemId: 'ec2eebfe-499b-43c4-b260-80ee5a4d9504',
    },
    variables: [
        { name: 'user', value: 'user', type: 'object', defaultValue: null },
        { name: 'accessToken', value: 'token', type: 'accessToken', defaultValue: null },
        { name: 'isAuthenticated', value: 'isAuthenticated', type: 'boolean', defaultValue: false },
    ],
    actions: [
        {
            name: 'Login with Popup',
            code: 'loginWithPopup',
            isAsync: true,
        },
        {
            name: 'Login with Redirect',
            code: 'loginWithRedirect',
        },
        { name: 'Logout', code: 'logout' },
        {
            name: 'Update User Profile',
            code: 'updateUserProfile',
            isAsync: true,
        },
        {
            name: 'Update User Email',
            code: 'updateUserEmail',
            isAsync: true,
        },
        {
            name: 'Change User Password',
            code: 'changeUserPassword',
            isAsync: true,
        },
    ],
};
