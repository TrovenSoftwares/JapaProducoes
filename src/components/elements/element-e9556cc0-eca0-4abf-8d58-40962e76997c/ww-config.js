export default {
  editor: {
    label: {
      en: "Date picker",
    },
    customStylePropertiesOrder: ["color", "isDarkMode", ["rows", "columns"]],
    bubble: {
      icon: "calendar",
    },
    deprecated: 'Use a date picker from the Elements panel instead of this one.',
  },
  triggerEvents: [
    { name: "change", label: { en: "On change" }, event: { value: "" } },
    {
      name: "initValueChange",
      label: { en: "On init value change" },
      event: { value: "" },
    },
  ],
  properties: {
    initValue: {
      label: {
        en: "Init value",
      },
      type: "Text",
      defaultValue: "Fri May 20 2022 00:00:00 GMT+0200",
      bindable: true,
      section: "settings",

    },
    showOn: {
      label: {
        en: "Show on",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "alwaysVisible", label: { en: "Always visible" } },
          { value: "hover", label: { en: "Hover" } },
          { value: "click", label: { en: "Click" } },
        ],
      },
      defaultValue: "hover",
      section: "settings",
    },
    selectAlsoTime: {
      label: {
        en: "Select also time",
      },
      type: "OnOff",
      defaultValue: false,
      section: "settings",
    },
    onlyTime: {
      hidden: (content) => !content.selectAlsoTime,
      label: {
        en: "Select only time",
      },
      type: "OnOff",
      defaultValue: false,
      section: "settings",
    },
    readonly: {
      label: { en: 'Read only', fr: 'Lecture seule' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
      hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.readonly !== undefined),
  },
    lang: {
      label: {
        en: "Lang",
        fr: "Lang",
      },
      type: "TextSelect",
      options: () => {
        const options = wwLib.wwWebsiteData
          .getCurrentPage()
          .langs.map((lang) => ({
            value: lang,
            label: { en: lang },
          }));

        options.unshift({ value: "pageLang", label: "Page lang" });

        return { options };
      },
      defaultValue: "pageLang",
      bindable: true,
      section: "settings",

    },
    mask: {
      label: {
        en: "Visualisation format",
      },
      type: "Text",
      defaultValue: "YYYY-MM-DD HH:mm A",
      section: "settings",
    },
    color: {
      label: {
        en: "Color",
        fr: "Color",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "gray", label: { en: "Gray" } },
          { value: "red", label: { en: "Red" } },
          { value: "orange", label: { en: "Orange" } },
          { value: "yellow", label: { en: "Yellow" } },
          { value: "green", label: { en: "Green" } },
          { value: "teal", label: { en: "Teal" } },
          { value: "blue", label: { en: "Blue" } },
          { value: "indigo", label: { en: "Indigo" } },
          { value: "purple", label: { en: "Purple" } },
          { value: "pink", label: { en: "Pink" } },
        ],
      },
      defaultValue: "gray",
    },
    isDarkMode: {
      label: {
        en: "Dark mode",
      },
      type: "OnOff",
      defaultValue: false,
    },
    rows: {
      type: "Number",
      label: {
        en: "Rows",
      },
      options: () => ({
        min: 1,
        max: 12,
        step: 1,
      }),
      responsive: true,
      defaultValue: 1,
    },
    columns: {
      type: "Number",
      label: {
        en: "Columns",
      },
      options: () => ({
        min: 1,
        max: 12,
        step: 1,
      }),
      responsive: true,
      defaultValue: 1,
    },
    dateElement: {
      hidden: true,
      defaultValue: { isWwObject: true, type: "ww-text" },
    },
  },
};
