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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique. J'ai réalisé les petites âmes avec mes doigts et créé les éclats en caressant délicatement les poils du pinceau pour projeter des points de lumière.",
          imageURL: eclatsDespoir,
          description: undefined,
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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et mes mains ainsi que mes doigts pour créer les textures sombres et profondes.",
          imageURL: lenfermementDesTenebres,
          description: undefined,
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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique appliquée au pinceau pour des détails précis et des formes dynamiques.",
          imageURL: lenvolDesDamnes,
          description: undefined,
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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et j'ai travaillé avec mes mains et mes doigts pour donner une texture immersive et énigmatique.",
          imageURL: lobservateurCache,
          description: undefined,
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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et mes mains pour exprimer la lourdeur émotionnelle à travers des gestes spontanés.",
          imageURL: lePoidsDeLAmour,
          description: undefined,
        },
        {
          routerName: "le-silence-du-reflet",
          title: "Le Silence du Reflet",
          artist: "Antoine Masia",
          date: "11/26/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et j'ai travaillé avec mes mains et mes doigts pour créer des jeux de lumière et de reflet.",
          imageURL: leSilenceDuReflet,
          description: undefined,
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
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique, mes mains et mes doigts pour donner vie à des mouvements organiques et puissants.",
          imageURL: eveilDeLame,
          description: undefined,
        },
        {
          routerName: "laube-de-leternite",
          title: "L'Aube de L'éternité",
          artist: "Antoine Masia",
          date: "11/30/2024",
          dimensions: {
            width: undefined,
            height: undefined,
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique appliquée avec mes mains pour les formes principales, et j'ai créé les éclats en caressant délicatement les poils du pinceau pour projeter de petits points de lumière.",
          imageURL: laubeDeLeternite,
          description: undefined,
        },
      ],
    },
  ],
};

export default collectionPaintings;
