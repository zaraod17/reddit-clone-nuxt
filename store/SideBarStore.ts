import { def } from "@vue/shared";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const listItems: {}[] = [
    {
      title: "Gaming",
      icon: "mdi-controller",
      subList: [
        "Valheim",
        "Genshin Impact",
        "Minecraft",
        "Pokimane",
        "Halo Infinite",
        "Call of Duty: Warzone",
        "Path of Exile",
        "Hollow Knight: Silksong",
        "Escape from Tarkov",
        "Watch Dogs: Legion",
      ],
    },
  ];
});
