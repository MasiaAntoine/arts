import { createRouter, createWebHistory } from "vue-router";
import { capitalizeWords } from "@/shared/utils";
import useCategories from "@/hooks/useCategories"; // Assurez-vous que le chemin est correct

const routes = [
  {
    path: "/:nameCat?",
    name: "home",
    component: () => import("../views/HomeView/HomeView.vue"),
    meta: {
      title: "Page d'accueil",
      description: "Découvrez ma collection unique de toiles de peintures.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { title, description } = to.meta;
  const defaultTitle = "Arts Antoine Masia";
  const defaultDescription =
    "Découvrez les magnifiques toiles de peinture d'Antoine Masia, un artiste talentueux. Explorez ses œuvres uniques et laissez-vous inspirer par son art exceptionnel.";

  let updatedTitle = title || defaultTitle;
  let updatedDescription = description || defaultDescription;
  let categoryImage = "";

  const { categories } = useCategories();

  if (to.name === "home" && to.params.nameCat) {
    const category = categories.value.find(
      (cat) => cat.routerName === to.params.nameCat,
    );
    if (category) {
      updatedTitle = capitalizeWords(category.name);
      updatedDescription = `Explorez ma sélection de toiles de peintures dans la catégorie ${category.name}. Découvrez des œuvres d'art uniques et inspirantes qui captivent l'essence de ${category.name}.`;
      categoryImage = category.coverImage;
    }
  }

  document.title = updatedTitle;

  const descriptionElement = document.querySelector(
    'head meta[name="description"]',
  );
  const imageMetaElement = document.querySelector(
    'head meta[property="og:image"]',
  );

  if (descriptionElement) {
    descriptionElement.setAttribute("content", updatedDescription);
  }

  if (imageMetaElement && categoryImage) {
    imageMetaElement.setAttribute("content", categoryImage);
  } else if (imageMetaElement) {
    imageMetaElement.remove();
  }

  next();
});

export default router;
