<template>
    <div class="g-sheets-settings-edit">
        <template v-if="!profile">
            <wwEditorFormRow required label="Connection to Google">
                <button type="button" class="ww-editor-button -primary" @click="authorize">Sign in</button>
            </wwEditorFormRow>
        </template>
        <template v-else>
            <wwEditorFormRow label="Connnected as">
                <div class="g-sheets-settings-edit__row">
                    <img class="g-sheets-settings-edit__image" :src="profile.picture" alt="" width="30" height="30" />
                    <div class="caption-l m-left">{{ profile.name }}</div>
                    <button type="button" class="ww-editor-button -primary -small m-auto-left" @click="authorize">
                        Switch account
                    </button>
                </div>
            </wwEditorFormRow>
            <wwEditorFormRow label="Sheet URL" required>
                <wwEditorInputText
                    type="text"
                    name="url"
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    :model-value="settings.privateData.url"
                    large
                    @update:modelValue="setSpreadsheet"
                />
            </wwEditorFormRow>
            <div v-if="settings.privateData.url && !isLoading" class="caption-m">
                Sheet name:
                <span v-if="settings.privateData.name" class="caption-m">
                    {{ settings.privateData.name }}
                </span>
                <span v-else class="label-m">Sheet not found</span>
            </div>
        </template>
        <wwLoader :loading="isLoading" />
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    data() {
        return {
            profile: undefined,
            interval: undefined,
            isLoading: false,
        };
    },
    async mounted() {
        this.isLoading = true;
        await this.getProfile();
        this.isLoading = false;
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        async authorize() {
            const data = await this.plugin.authorize();
            this.profile = undefined;
            window.open(data.authUrl, '_target');
            this.isLoading = true;
            this.interval = setInterval(this.getProfile, 1000);
        },
        async getProfile() {
            try {
                const data = await this.plugin.getProfile();
                this.profile = data.profile;
                this.setPrivateProp('token', data.token);
                this.isLoading = false;
                clearInterval(this.interval);
            } catch (err) {
                this.profile = undefined;
                wwLib.wwLog.error(err);
            }
        },
        async getSpreadsheetMeta(spreadsheetId) {
            try {
                this.isLoading = true;
                const { properties } = await this.plugin.getSpreadsheetMeta(spreadsheetId);
                this.setPrivateProp('name', properties.title);
            } catch (err) {
                this.setPrivateProp('name', '');
                wwLib.wwNotification.open({
                    text: 'Unable to pull your sheets, please make sure the plugin is still connected to your account.',
                    color: 'red',
                });
            } finally {
                this.isLoading = false;
            }
        },
        setSpreadsheet(value) {
            const spreadsheetIdRegex = new RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)');
            const found = spreadsheetIdRegex.exec(value);
            const spreadsheetId = found && found[1];
            this.$emit('update:settings', {
                ...this.settings,
                privateData: {
                    ...this.settings.privateData,
                    url: value,
                    spreadsheetId,
                    name: '',
                },
            });
            if (spreadsheetId) this.getSpreadsheetMeta(spreadsheetId);
        },
        setPrivateProp(key, value) {
            this.$emit('update:settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, [key]: value },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.g-sheets-settings-edit {
    &__link {
        color: var(--ww-color-content-brand);
        margin-left: var(--ww-spacing-02);
    }
    &__row {
        display: flex;
        align-items: center;
    }
    &__image {
        border: 2px solid var(--ww-color-content-brand);
        border-radius: 50%;
    }
    .m-auto-left {
        margin-left: auto;
    }
    .m-left {
        margin-left: var(--ww-spacing-02);
    }
}
</style>
