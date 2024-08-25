import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { updateRecipe } = useRecipeStore();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;