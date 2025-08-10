import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

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
