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
      coverImage: eclatsDespoir,
      paintings: [
        {
          title: "Éclats d'Espoir",
          artist: "Antoine Masia",
          date: "11/12/2024",
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: eclatsDespoir,
          description: "Description for Éclats d'Espoir.",
          isPopular: true,
        },
        {
          title: "L'Enfermement des Ténèbres",
          artist: "Antoine Masia",
          date: 2024,
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: lenfermementDesTenebres,
          description: "Description for L'Enfermement des Ténèbres.",
        },
        {
          title: "L'Envol des Damnés",
          artist: "Antoine Masia",
          date: "11/12/2024",
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: lenvolDesDamnes,
          description: "Description for L'Envol des Damnés.",
          isPopular: true,
        },
        {
          title: "L'Observateur Caché",
          artist: "Antoine Masia",
          date: 2024,
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: lobservateurCache,
          description: "Description for L'Observateur Caché.",
        },
        {
          title: "Le Poids de l'Amour",
          artist: "Antoine Masia",
          date: 2024,
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: lePoidsDeLAmour,
          description: "Description for Le Poids de l'Amour.",
        },
        {
          title: "Le silence du reflet",
          artist: "Antoine Masia",
          date: "11/12/2024",
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: leSilenceDuReflet,
          description: "Description for Le silence du reflet.",
          isPopular: true,
        },
      ],
    },
    {
      name: "résurrection",
      coverImage: eveilDeLame,
      paintings: [
        {
          title: "Éveil De L'âme",
          artist: "Antoine Masia",
          date: 2024,
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: eveilDeLame,
          description: "Description for Éveil De L'âme.",
        },
        {
          title: "Laube De L'éternité",
          artist: "Antoine Masia",
          date: 2024,
          dimensions: {
            width: "unknown",
            height: "unknown",
          },
          technique: "unknown",
          imageURL: laubeDeLeternite,
          description: "Description for Laube De L'éternité.",
        },
      ],
    },
  ],
};

export default collectionPaintings;
