import { t } from "visual/utils/i18n";

export function getItems() {
  return [
    {
      id: "settingsTabs",
      type: "tabs-dev",
      config: {
        align: "start"
      },
      tabs: [
        {
          id: "moreSettingsAdvanced",
          label: t("Advanced"),
          icon: "nc-cog",
          options: [
            {
              id: "zIndex",
              type: "slider-dev",
              disabled: true
            },
            {
              id: "showOnDesktop",
              type: "switch-dev",
              disabled: true
            }
          ]
        }
      ]
    }
  ];
}
