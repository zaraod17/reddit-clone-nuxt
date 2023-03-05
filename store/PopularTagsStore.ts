import { defineStore } from "pinia";

export const usePopularTagsStore = defineStore("popularTags", () => {
  const listItems: Array<{ title: string; tags: string[] }> = [
    {
      title: "Popular Communities",
      tags: [
        "AskReddit",
        "NoStupidQuestions",
        "DestinyTheGame",
        "explainlikeimfive",
        "AskMen",
        "leaueoflegends",
        "Minecraft",
      ],
    },
    {
      title: "Gaming",
      tags: [
        "StarewValley",
        "FortniteCompetitive",
        "Warframe",
        "totalwar",
        "Fallout",
        "RocketLeague",
        "fo76",
        "yugioh",
        "eu4",
      ],
    },
    {
      title: "Sports",
      tags: [
        "runing",
        "soccer",
        "bjj",
        "MMA",
        "hockey",
        "formula1",
        "CFB",
        "barstoolsports",
        "aitsoft",
        "rugbyunion",
        "golf",
        "MTB",
        "cycling",
      ],
    },
    {
      title: "Tv",
      tags: [
        "Naruto",
        "BokuNoHeroAcademia",
        "marvelstudios",
        "tupauldragace",
        "90DaysFiance",
        "dbz",
        "Boruto",
      ],
    },
    {
      title: "Travel",
      tags: [
        "vacouver",
        "brasil",
        "australia",
        "mexico",
        "argentina",
        "melbourne",
        "ottava",
        "korea",
        "ireland",
        "travel",
        "Calgary",
        "portugal",
      ],
    },
    {
      title: "Health & Fitness",
      tags: [
        "orangetheory",
        "bodybuilding",
        "bodyweightfitness",
        "vegan",
        "crossfit",
        "nattyorjuice",
        "EatCheapAndHealthy",
        "loseit",
      ],
    },
    {
      title: "Fashion",
      tags: [
        "MakeupAddiction",
        "Watches",
        "Beauty",
        "BeautyGuruChatter",
        "femalefashionadvice",
        "frugalmalefashion",
        "curlyhair",
        "poshmark",
      ],
    },
  ];

  return { listItems };
});
