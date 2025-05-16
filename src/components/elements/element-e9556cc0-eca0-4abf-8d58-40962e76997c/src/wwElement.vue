<template>
  <DatePicker
      v-if="isReadOnly"
      key="readonly"
      class="ww-date-time-picker"
      v-model="value"
      :masks="masks"
      :color="content.color"
      :is-dark="content.isDarkMode"
      :mode="mode"
      :rows="content.rows"
      :columns="content.columns"
      :locale="locale"
    >
      <template v-slot="{ inputValue }">
        <wwElement
          class="ww-date-time-picker__text"
          v-bind="content.dateElement"
          :wwProps="{ text: inputValue }"
          :states="isReadOnly ? ['readonly'] : []"
        />
      </template>
    </DatePicker>
  <!-- INLINE PICKER -->
  <DatePicker
    v-else-if="content.showOn === 'alwaysVisible'"
    key="alwaysVisible"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  />

  <!-- SHOW ON CLICK -->
  <DatePicker
    v-else-if="content.showOn === 'click'"
    key="click"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <wwElement
        class="ww-date-time-picker__text"
        v-bind="content.dateElement"
        :wwProps="{ text: inputValue }"
        @click="isEditing ? null : togglePopover()"
      />
    </template>
  </DatePicker>

  <!-- SHOW ON HOVER -->
  <DatePicker
    v-else-if="content.showOn === 'hover'"
    key="hover"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  >
    <template v-slot="{ inputValue, inputEvents }">
      <wwElement
        class="ww-date-time-picker__text"
        v-bind="content.dateElement"
        :wwProps="{ text: inputValue }"
        v-on="isEditing ? null : inputEvents"
      />
    </template>
  </DatePicker>
</template>

<script>
import { computed } from "vue";
import { DatePicker } from "./datepicker.js";
import "./style.css";

export default {
  components: {
    DatePicker,
  },
  emits: ["update:content", 'add-state', 'remove-state', 'trigger-event'],
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
  },
  setup(props) {
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        type: "string",
        defaultValue:
          computed(() => 
            typeof props.content.initValue !== "string" &&
            typeof props.content.initValue !== "object"
              ? new Date().toString()
              : props.content.initValue
          ),
      });

    return { variableValue, setValue };
  },
  watch: {
    "content.initValue"(newValue) {
      if (this.setNewDate(newValue))
        this.$emit("trigger-event", {
          name: "initValueChange",
          event: { value: this.value },
        });
    },
    "content.selectAlsoTime"(newValue) {
      if (newValue === false) {
        this.$emit("update:content", { onlyTime: false });
      }
    },
    isReadOnly: {
      immediate: true,
      handler(value) {
          if (value) {
              this.$emit('add-state', 'readonly');
          } else {
              this.$emit('remove-state', 'readonly');
          }
      },
    },
  },
  methods: {
    ajustDate(date) {
      if (this.mode === "date") {
        return new Date(new Date(date).setHours(0, 0, 0));
      }

      return date;
    },
    setNewDate(date) {
      const newDate = this.ajustDate(date).toString()
      if (this.value === newDate) return false
      this.setValue(newDate);
      return true
    }
  },
  computed: {
    isEditing() {
      // eslint-disable-next-line no-unreachable
      return false;
    },
    value: {
      get() {
        return this.variableValue;
      },
      set(newValue) {
        if (this.setNewDate(newValue)) 
          this.$emit("trigger-event", {
            name: "change",
            event: { value: this.value },
          });
      },
    },
    masks() {
      return {
        input: this.content.mask,
        inputTime: this.content.mask,
        inputDateTime: this.content.mask
      };
    },
    mode() {
      if (this.content.onlyTime) return "time";
      return this.content.selectAlsoTime ? "dateTime" : "date";
    },
    locale() {
      if (this.content.lang === "pageLang") {
        return wwLib.wwLang.lang;
      }

      return this.content.lang;
    },
    isReadOnly() {
          return this.wwElementState.props.readonly === undefined
              ? this.content.readonly
              : this.wwElementState.props.readonly;
      },
  },
};
</script>

<style lang="scss" scoped>
.ww-date-time-picker {
  justify-content: inherit !important;
  width: fit-content !important;
}
</style>
