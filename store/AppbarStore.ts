import { defineStore } from "pinia";

export const useAppBarStore = defineStore("appbar", () => {
  const items = [
    {
      title: "Dark Mode",
      prepIcon: "mdi-weather-night",
      apIcon: "",
      hasAppIcon: false,
    },
    {
      title: "Help Center",
      prepIcon: "mdi-help-circle-outline",
      apIcon: "",
      hasAppIcon: false,
    },
    {
      title: "More",
      prepIcon: "mdi-information-outline",
      apIcon: "",
      hasAppIcon: true,
      subList: [
        "Reddit iOS",
        "Reddit Android",
        "Rereddit",
        "Best Communities",
        "Communities",
        "About Reddit",
        "Blog",
        "Careers",
        "Press",
      ],
    },
    {
      title: "Terms & Policies",
      prepIcon: "mdi-view-list-outline",
      apIcon: "",
      hasAppIcon: true,
      subList: [
        "User Agreement",
        "Privacy Policy",
        "Content Policy",
        "Moderator Code of Conduct",
      ],
    },
    {
      title: "Advertise on Reddit",
      prepIcon: "mdi-bullhorn-outline",
      apIcon: "",
      hasAppIcon: false,
    },
  ];

  return { items };
});
