import { def } from "@vue/shared";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const listItems = [
    {
      title: "Gaming",
      icon: "mdi-gamepad-variant-outline",
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
    {
      title: "Sports",
      icon: "mdi-basketball",
      subList: [
        "NFL",
        "NBA",
        "Megan Anderson",
        "Atlanta Hawks",
        "Los Angeles Lakers",
        "Boston Celtics",
        "Arsenal F.C",
        "Philadelphia 76ers",
        "Premier League",
        "UFC",
      ],
    },
    {
      title: "Buisness & Economics",
      icon: "mdi-finance",
      subList: [
        "GameStop",
        "Moderna",
        "Pfizer",
        "Johnson & Johnson",
        "AstraZeneca",
        "Walgreens",
        "Best Guy",
        "Novavax",
        "SpaceX",
        "Tesla",
      ],
    },
  ];

  return { listItems };
});
