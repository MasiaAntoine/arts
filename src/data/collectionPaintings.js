import eclatsDespoir from "@/assets/canvas/EclatsEspoir.jpg";
import eclatsDespoirCompressed from "@/assets/canvas/compressed/EclatsEspoir.jpg";
import eveilDeLame from "@/assets/canvas/EveilDeAme.jpg";
import eveilDeLameCompressed from "@/assets/canvas/compressed/EveilDeAme.jpg";
import lenfermementDesTenebres from "@/assets/canvas/EnfermementDesTenebres.jpg";
import lenfermementDesTenebresCompressed from "@/assets/canvas/compressed/EnfermementDesTenebres.jpg";
import lenvolDesDamnes from "@/assets/canvas/EnvolDesDamnes.jpg";
import lenvolDesDamnesCompressed from "@/assets/canvas/compressed/EnvolDesDamnes.jpg";
import lobservateurCache from "@/assets/canvas/ObservateurCache.jpg";
import lobservateurCacheCompressed from "@/assets/canvas/compressed/ObservateurCache.jpg";
import laubeDeLeternite from "@/assets/canvas/LaubeDeEternite.jpg";
import laubeDeLeterniteCompressed from "@/assets/canvas/compressed/LaubeDeEternite.jpg";
import lePoidsDeLAmour from "@/assets/canvas/LePoidsDeAmour.jpg";
import lePoidsDeLAmourCompressed from "@/assets/canvas/compressed/LePoidsDeAmour.jpg";
import leSilenceDuReflet from "@/assets/canvas/LeSilenceDuReflet.jpg";
import leSilenceDuRefletCompressed from "@/assets/canvas/compressed/LeSilenceDuReflet.jpg";
import PresenceCachee from "@/assets/canvas/PresenceCachee.jpg";
import PresenceCacheeCompressed from "@/assets/canvas/compressed/PresenceCachee.jpg";
import ResilienceEnEclats from "@/assets/canvas/ResilienceEnEclats.jpg";
import ResilienceEnEclatsCompressed from "@/assets/canvas/compressed/ResilienceEnEclats.jpg";
import VideInexplicable from "@/assets/canvas/VideInexplicable.jpg";
import VideInexplicableCompressed from "@/assets/canvas/compressed/VideInexplicable.jpg";

const collectionPaintings = {
  categories: [
    {
      name: "catharsis",
      routerName: "catharsis",
      coverImage: eclatsDespoirCompressed,
      paintings: [
        {
          routerName: "eclats-despoir",
          title: "Éclats d'Espoir",
          artist: "Antoine Masia",
          date: "11/24/2024",
          dimensions: {
            width: "38cm",
            height: "46cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique. J'ai réalisé les petites âmes avec mes doigts et créé les éclats en caressant délicatement les poils du pinceau pour projeter des points de lumière.",
          imageURL: eclatsDespoir,
          imageCompressedURL: eclatsDespoirCompressed,
          description: undefined,
          isPopular: true,
        },
        {
          routerName: "lenfermement-des-tenebres",
          title: "L'Enfermement des Ténèbres",
          artist: "Antoine Masia",
          date: "11/13/2024",
          dimensions: {
            width: "40cm",
            height: "50cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et mes mains ainsi que mes doigts pour créer les textures sombres et profondes.",
          imageURL: lenfermementDesTenebres,
          imageCompressedURL: lenfermementDesTenebresCompressed,
          description: undefined,
        },
        {
          routerName: "lenvol-des-damnes",
          title: "L'Envol des Damnés",
          artist: "Antoine Masia",
          date: "11/29/2024",
          dimensions: {
            width: "38cm",
            height: "46cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique appliquée au pinceau pour des détails précis et des formes dynamiques.",
          imageURL: lenvolDesDamnes,
          imageCompressedURL: lenvolDesDamnesCompressed,
          description: undefined,
          isPopular: true,
        },
        {
          routerName: "lobservateur-cache",
          title: "L'Observateur Caché",
          artist: "Antoine Masia",
          date: "11/18/2024",
          dimensions: {
            width: "50cm",
            height: "70cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et j'ai travaillé avec mes mains et mes doigts pour donner une texture immersive et énigmatique.",
          imageURL: lobservateurCache,
          imageCompressedURL: lobservateurCacheCompressed,
          description: undefined,
        },
        {
          routerName: "le-poids-de-lamour",
          title: "Le Poids de l'Amour",
          artist: "Antoine Masia",
          date: "11/23/2024",
          dimensions: {
            width: "38cm",
            height: "46cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et mes mains pour exprimer la lourdeur émotionnelle à travers des gestes spontanés.",
          imageURL: lePoidsDeLAmour,
          imageCompressedURL: lePoidsDeLAmourCompressed,
          description: undefined,
        },
        {
          routerName: "le-silence-du-reflet",
          title: "Le Silence du Reflet",
          artist: "Antoine Masia",
          date: "11/26/2024",
          dimensions: {
            width: "38cm",
            height: "46cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et j'ai travaillé avec mes mains et mes doigts pour créer des jeux de lumière et de reflet.",
          imageURL: leSilenceDuReflet,
          imageCompressedURL: leSilenceDuRefletCompressed,
          description:
            "Ce tableau dévoile un masque invisible, celui qui donne l’illusion d’un visage serein et intact. À première vue, tout semble aller bien, mais cette apparence n’est qu’une façade. Derrière ce sourire qui paraît sincère se cache une réalité bien différente : une destruction émotionnelle profonde. La surface ne laisse rien transparaître, mais la peinture révèle les fissures et le chaos intérieur que le masque dissimule au regard des autres.",
          isPopular: true,
        },
        {
          routerName: "presence-cachee",
          title: "Présence Cachée",
          artist: "Antoine Masia",
          date: "12/07/2024",
          dimensions: {
            width: "30cm",
            height: "40cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et un gros pinceau pour faire les fonds dégradés, un petit pinceau pour faire les formes sombres, ma main pour quelques dégradés, et ensuite une sorte de spatule qui normalement permet d'étaler la peinture mais que j'ai utilisée pour faire les petits traits en grattant la peinture sur la toile.",
          imageURL: PresenceCachee,
          imageCompressedURL: PresenceCacheeCompressed,
          description:
            "Un voile bleu enveloppe l’inconnu, comme une mer calme qui cache en ses profondeurs des mystères insondables. Au centre, un sourire se dessine, mais il n’offre aucun répit : c’est un rictus figé, glacé, où la menace se mêle à l’énigme. Les traits, à la fois humains et inhumains, oscillent entre la fascination et l’effroi, comme si quelque chose d’indicible cherchait à s’exprimer au-delà des ombres. La toile respire une tension sourde, une présence qui ne se révèle jamais tout à fait mais qui observe, patiente. Ce qui semble familier se transforme en une invitation à sonder l’obscur, là où la peur n’a pas de nom mais où elle existe pleinement.*",
        },
        {
          routerName: "vide-inexplicable",
          title: "Vide Inexplicable",
          artist: "Antoine Masia",
          date: "12/03/2024",
          dimensions: {
            width: "38cm",
            height: "46cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et un pinceau pour les traces de peinture.",
          imageURL: VideInexplicable,
          imageCompressedURL: VideInexplicableCompressed,
          description:
            "Un entrelacement de lignes bleutées émerge de l’obscurité, comme des veines illuminant un néant silencieux. Le noir, omniprésent, absorbe la lumière, mais ces fragments d’azur persistent, fragiles et pourtant déterminés. La composition évoque une lutte intérieure, un combat entre l’immobilité de l’ombre et l’élan vital qui cherche à s’élever. Les courbes, tantôt sinueuses, tantôt brisées, suggèrent un chemin incertain, une quête à travers un paysage indéchiffrable. C’est un dialogue entre profondeur et ascension, une tension qui oscille entre la perte et l’espoir d’une percée lumineuse.",
        },
      ],
    },
    {
      name: "résurrection",
      routerName: "resurrection",
      coverImage: eveilDeLameCompressed,
      paintings: [
        {
          routerName: "eveil-de-lame",
          title: "Éveil De L'âme",
          artist: "Antoine Masia",
          date: "12/01/2024",
          dimensions: {
            width: "30cm",
            height: "40cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique, mes mains et mes doigts pour donner vie à des mouvements organiques et puissants.",
          imageURL: eveilDeLame,
          imageCompressedURL: eveilDeLameCompressed,
          description:
            "Cette œuvre dépeint une ascension silencieuse, un mouvement imperceptible qui traverse la toile comme un souffle vital. Les teintes vibrantes de vert et de jaune s’entrelacent, évoquant à la fois la fraîcheur de la vie et la force d’une lumière intérieure qui cherche à percer l’obscurité. Au centre, une silhouette éthérée semble se détacher, un flux d’énergie en perpétuelle transformation. Elle ne se définit pas, elle s’efface et renaît, emportée par des courants invisibles. Tout autour, des éclats lumineux flottent, tels des fragments d’espoir ou des pensées en suspension, témoins d’un équilibre fragile entre chaos et sérénité. Sommes-nous les créateurs de notre propre lumière, ou ne sommes-nous que des passages où elle s’exprime ?",
        },
        {
          routerName: "laube-de-leternite",
          title: "L'Aube de L'éternité",
          artist: "Antoine Masia",
          date: "11/30/2024",
          dimensions: {
            width: "30cm",
            height: "40cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique appliquée avec mes mains pour les formes principales, et j'ai créé les éclats en caressant délicatement les poils du pinceau pour projeter de petits points de lumière.",
          imageURL: laubeDeLeternite,
          imageCompressedURL: laubeDeLeterniteCompressed,
          description: undefined,
        },
        {
          routerName: "resilience-en-eclats",
          title: "Résilience en Éclats",
          artist: "Antoine Masia",
          date: "12/06/2024",
          dimensions: {
            width: "30cm",
            height: "40cm",
          },
          technique:
            "Pour cette œuvre, j'ai utilisé de la peinture acrylique et mes mains pour exprimer la résilience à travers des éclats de mauve et violet.",
          imageURL: ResilienceEnEclats,
          imageCompressedURL: ResilienceEnEclatsCompressed,
          description:
            "Cette œuvre traduit le tumulte d’une âme en quête d’apaisement. Une explosion viscérale, presque cosmique, semble jaillir du centre, comme si un noyau enfermé depuis trop longtemps venait de se fracturer. Les éclats s’élèvent dans un mouvement chaotique mais libérateur, évoquant le poids des émotions enfouies qui cherchent enfin la lumière. La composition, entre éclaboussures incontrôlées et traces délicates, reflète une tension entre le désordre intérieur et une tentative d’harmonie. Les teintes froides, presque aquatiques, glissent sur la toile comme des larmes figées dans leur chute, contrastant avec l’énergie brute des gestes. C’est un instant figé dans le temps, le témoignage silencieux d’une lutte invisible : celle de l’introspection et de la résilience face au poids du passé.",
        },
      ],
    },
  ],
};

export default collectionPaintings;
