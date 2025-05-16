<template>
    <div class="g-sheets-collection-summary">
        <div class="g-sheets-collection-summary__elem caption-s">Sheet: {{ config.name || '-' }}</div>
    </div>
</template>

<script>
export default {
    props: {
        config: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped>
.g-sheets-collection-summary {
    &__elem {
        margin-bottom: var(--ww-spacing-01);
    }
}
</style>
