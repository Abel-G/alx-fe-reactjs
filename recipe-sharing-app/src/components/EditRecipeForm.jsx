import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { updateRecipe } = useRecipeStore();
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;