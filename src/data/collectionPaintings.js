import eclatsDespoir from "@/assets/canvas/EclatsEspoir.jpg";
import eveilDeLame from "@/assets/canvas/EveilDeAme.jpg";
import lenfermementDesTenebres from "@/assets/canvas/EnfermementDesTenebres.jpg";
import lenvolDesDamnes from "@/assets/canvas/EnvolDesDamnes.jpg";
import lobservateurCache from "@/assets/canvas/ObservateurCache.jpg";
import laubeDeLeternite from "@/assets/canvas/LaubeDeEternite.jpg";
import lePoidsDeLAmour from "@/assets/canvas/LePoidsDeAmour.jpg";
import leSilenceDuReflet from "@/assets/canvas/LeSilenceDuReflet.jpg";

const collectionPaintings = {
  categories: [
    {
      name: "catharsis",
      routerName: "catharsis",
      coverImage: eclatsDespoir,
      paintings: [
        {
          routerName: "eclats-despoir",
          title: "Éclats d'Espoir",
          artist: "Antoine Masia",
          date: "11/24/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: eclatsDespoir,
          description: "Description for Éclats d'Espoir.",
          isPopular: true,
        },
        {
          routerName: "lenfermement-des-tenebres",
          title: "L'Enfermement des Ténèbres",
          artist: "Antoine Masia",
          date: "11/13/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: lenfermementDesTenebres,
          description: "Description for L'Enfermement des Ténèbres.",
        },
        {
          routerName: "lenvol-des-damnes",
          title: "L'Envol des Damnés",
          artist: "Antoine Masia",
          date: "11/29/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: lenvolDesDamnes,
          description: "Description for L'Envol des Damnés.",
          isPopular: true,
        },
        {
          routerName: "lobservateur-cache",
          title: "L'Observateur Caché",
          artist: "Antoine Masia",
          date: "11/18/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: lobservateurCache,
          description: "Description for L'Observateur Caché.",
        },
        {
          routerName: "le-poids-de-lamour",
          title: "Le Poids de l'Amour",
          artist: "Antoine Masia",
          date: "11/23/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: lePoidsDeLAmour,
          description: "Description for Le Poids de l'Amour.",
        },
        {
          routerName: "le-silence-du-reflet",
          title: "Le silence du reflet",
          artist: "Antoine Masia",
          date: "11/26/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: leSilenceDuReflet,
          description: "Description for Le silence du reflet.",
          isPopular: true,
        },
      ],
    },
    {
      name: "résurrection",
      routerName: "resurrection",
      coverImage: eveilDeLame,
      paintings: [
        {
          routerName: "eveil-de-lame",
          title: "Éveil De L'âme",
          artist: "Antoine Masia",
          date: "12/01/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: "peinture acrylique",
          imageURL: eveilDeLame,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia vitae expedita ratione. Repellendus, eius quis possimus excepturi quae repellat architecto cum. Possimus cumque corporis vel ad ipsum tempora vero.",
        },
        {
          routerName: "laube-de-leternite",
          title: "Laube De L'éternité",
          artist: "Antoine Masia",
          date: "11/30/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique: undefined,
          imageURL: laubeDeLeternite,
          description: "Description for Laube De L'éternité.",
        },
      ],
    },
  ],
};

export default collectionPaintings;
