import type { LanguageFamilyTree } from "../language-types";

/**
 * Uto-Aztecan Language Family Tree
 *
 * A major family of the Americas stretching from the US Southwest to Central America.
 * Included because Nahuatl gave English chocolate, tomato, avocado, and more.
 */
export const utoAztecan: LanguageFamilyTree = {
  slug: "uto-aztecan",
  name: "Uto-Aztecan",
  hook: "From the deserts of Utah to the temples of Tenochtitlan — the family that gave us chocolate, tomato, avocado, and coyote.",
  description:
    "Uto-Aztecan is one of the largest language families in the Americas, spanning from the Great Basin of the western United States to Central America. Its most famous member, Nahuatl, was the language of the Aztec Empire and the source of some of English's most essential food words. The family's name reflects its geographic range: 'Ute' from the northern Ute people of Utah, 'Aztecan' from the southern Nahuatl-speaking Aztecs.",
  originRegion: "Southwestern North America",
  originPeriod: "~5000 BCE (estimated)",
  livingLanguages: "~61",
  totalSpeakers: "~2 million",
  wordCount: 0,
  story: [
    "The Uto-Aztecan homeland was likely in the deserts of what is now the southwestern United States and northwestern Mexico. Over thousands of years, its speakers spread both north (Ute, Shoshone, Comanche) and south (Nahuatl, Pipil), creating one of the widest geographic distributions of any American language family.",
    "The southern branch produced Nahuatl, which became the lingua franca of the Aztec Empire and one of the most documented pre-Columbian languages. After the Spanish conquest, Nahuatl vocabulary flooded into Spanish and from there into English — chocolate, tomato, avocado, coyote, and chipotle are all Nahuatl words.",
    "Today, about 1.7 million people still speak Nahuatl in Mexico, making it the most widely spoken indigenous language in North America. Other Uto-Aztecan languages — Hopi, Comanche, Tarahumara — survive with smaller speaker populations, each carrying unique cultural knowledge.",
  ],
  tree: {
    id: "uto-aztecan",
    name: "Uto-Aztecan",
    slug: "uto-aztecan",
    level: "family",
    status: "living",
    classification: "established",
    approximateAge: "~5000 BCE",
    region: "Western Americas (Utah → Central America)",
    description:
      "One of the largest language families of the Americas.",
    displayColor: "#C87533",
    children: [
      {
        id: "ua-southern",
        name: "Southern Uto-Aztecan",
        slug: "southern-uto-aztecan",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Mexico & Central America",
        displayColor: "#D88543",
        children: [
          {
            id: "ua-nahuatl",
            name: "Nahuatl",
            slug: "nahuatl",
            level: "language",
            status: "living",
            classification: "established",
            region: "Central Mexico",
            description:
              "The language of the Aztec Empire. Still spoken by 1.7 million people. Source of chocolate, tomato, avocado, and coyote.",
            languageSlugs: ["nahuatl"],
            displayColor: "#E89553",
          },
          {
            id: "ua-pipil",
            name: "Pipil",
            slug: "pipil",
            level: "language",
            status: "living",
            classification: "established",
            region: "El Salvador",
            description: "A Nahuan language spoken in El Salvador, closely related to Nahuatl.",
            displayColor: "#C87533",
          },
        ],
      },
      {
        id: "ua-northern",
        name: "Northern Uto-Aztecan",
        slug: "northern-uto-aztecan",
        level: "branch",
        status: "living",
        classification: "established",
        region: "Southwestern USA & Northern Mexico",
        displayColor: "#B86523",
        children: [
          {
            id: "ua-hopi",
            name: "Hopi",
            slug: "hopi",
            level: "language",
            status: "living",
            classification: "established",
            region: "Arizona, USA",
            displayColor: "#C87533",
          },
          {
            id: "ua-comanche",
            name: "Comanche",
            slug: "comanche",
            level: "language",
            status: "living",
            classification: "established",
            region: "Oklahoma, USA (historically Great Plains)",
            displayColor: "#B86523",
          },
          {
            id: "ua-shoshone",
            name: "Shoshone",
            slug: "shoshone",
            level: "language",
            status: "living",
            classification: "established",
            region: "Great Basin, USA",
            displayColor: "#A85513",
          },
        ],
      },
    ],
  },
};
