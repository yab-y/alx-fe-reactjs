import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id)
      );
      const shuffled = recommended.sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now().toString(), ...recipe }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    const term = searchTerm.toLowerCase();

    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term) ||
      (recipe.description && recipe.description.toLowerCase().includes(term)) ||
      (recipe.ingredients && recipe.ingredients.some(i => i.toLowerCase().includes(term)))
    );
  },
}));
