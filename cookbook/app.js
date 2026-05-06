const flavorNames = [
  "Salty",
  "Sweet",
  "Sour",
  "Bitter",
  "Savory",
  "Spicy",
  "Smoky",
  "Tangy",
  "Zesty",
  "Creamy",
  "Buttery",
  "Garlicky",
  "Cheesy",
  "Minty",
  "Fruity",
  "Nutty",
  "Herby",
  "Peppery",
  "Citrusy",
  "Chocolatey",
  "Caramelized",
  "Toasted",
  "Earthy",
  "Floral",
  "Vanilla",
  "Cinnamon",
  "Gingery",
  "Honeyed",
  "Sugary",
  "Rich",
  "Bold",
  "Mild",
  "Juicy",
  "Refreshing",
  "Tart",
  "Fiery",
  "Umami",
  "Crispy",
  "Crunchy",
  "Velvety",
  "Smooth",
  "Icy",
  "Warm",
  "Roasted",
  "Grilled",
  "Fried",
  "Baked",
  "Pickled",
  "Fermented",
  "Coconutty",
  "Maple",
  "Coffee-flavored",
  "Tea-like",
  "Woody",
  "Spiced",
  "Lemony",
  "Limey",
  "Orange-flavored",
  "Berry-like",
  "Tropical",
  "Banana-like",
  "Apple-like",
  "Peachy",
  "Cherry-flavored",
  "Watermelon-flavored",
  "Pineapple-flavored",
  "Mango-flavored",
  "Grape-flavored",
  "Almond-flavored",
  "Peanutty",
  "Hazelnut-flavored",
  "Pistachio-flavored",
  "Meaty",
  "Bacony",
  "Oniony",
  "Tomatoey",
  "Vinegary",
  "Yogurty",
  "Milky",
  "Eggy",
  "Seafood-like",
  "Briny",
  "Charred",
  "Burnt-sugar",
  "Syrupy",
  "Marshmallow-like",
  "Candy-like",
  "Bubblegum-flavored",
  "Cotton-candy flavored",
  "Cool",
  "Hot",
  "Fresh",
  "Deep-flavored",
  "Light",
  "Exotic",
  "Bitter-sweet",
  "Sour-sweet",
  "Sweet-spicy",
  "Salty-sweet",
  "Extra-cheesy"
];

const flavorDetails = {
  Salty: ["salt", "crunchy snacks and savory bites"],
  Sweet: ["cake", "fruit, honey, chocolate, cozy bakes"],
  Sour: ["lemon", "citrus, vinegar, and tangy sauces"],
  Bitter: ["leaf", "greens, cocoa, and deep tea notes"],
  Savory: ["soup", "hearty dinners and cozy bowls"],
  Spicy: ["fire", "peppery recipes with heat"],
  Smoky: ["smoke", "grilled flavor and campfire edges"],
  Tangy: ["zing", "bright sauces and lively bites"],
  Zesty: ["zest", "fresh citrus sparkle"],
  Creamy: ["cream", "smooth sauces and soft textures"],
  Buttery: ["butter", "golden, rich comfort food"],
  Garlicky: ["garlic", "bold garlic-forward dishes"],
  Cheesy: ["cheese", "melty, stretchy, snacky recipes"],
  Minty: ["mint", "cool herbs and fresh finishes"],
  Fruity: ["fruit", "juicy fruit-led recipes"],
  Nutty: ["nut", "toasted nuts and warm crunch"],
  Herby: ["herb", "fresh herbs and garden flavors"],
  Peppery: ["pepper", "pepper-kissed dishes"],
  Citrusy: ["citrus", "orange, lemon, and lime brightness"],
  Chocolatey: ["cocoa", "deep chocolate desserts"],
  "Extra-cheesy": ["cheese", "maximum melty cheese energy"]
};

const colors = [
  "#b64054",
  "#d88a1d",
  "#4f7a56",
  "#4d718b",
  "#9b633f",
  "#6b3d32",
  "#a65d35",
  "#7b6b54",
  "#c94f7c",
  "#c99a43"
];

const foods = [
  "Soup Bowl",
  "Snack Stack",
  "Pasta Twirl",
  "Rice Plate",
  "Toast Tray",
  "Noodle Cup",
  "Garden Wrap",
  "Mini Pie",
  "Skillet Bites",
  "Crisp Bowl"
];

const titleStarters = [
  "Cloud",
  "Garden",
  "Sunrise",
  "Midnight",
  "Picnic",
  "Harvest",
  "Kitchen",
  "Market",
  "Campfire",
  "Festival",
  "Cozy",
  "Rainbow",
  "Golden",
  "Secret",
  "Little",
  "Grand",
  "Twisty",
  "Spark",
  "Dreamy",
  "Wonder"
];

const titleEndings = [
  "Delight",
  "Surprise",
  "Treasure",
  "Magic",
  "Feast",
  "Swirl",
  "Crunch",
  "Glow",
  "Pocket",
  "Tower",
  "Melt",
  "Skillet",
  "Ribbon",
  "Scoop",
  "Bites",
  "Platter",
  "Mix",
  "Cup",
  "Twist",
  "Sprinkle"
];

const pantry = [
  "fresh herbs",
  "olive oil",
  "soft bread",
  "rice",
  "noodles",
  "roasted vegetables",
  "cream",
  "citrus juice",
  "toasted seeds",
  "sauce",
  "cheese",
  "spices",
  "fruit",
  "garlic",
  "butter"
];

const extraPantry = [
  "crispy onions",
  "tiny tomatoes",
  "golden crumbs",
  "sweet corn",
  "green peas",
  "black beans",
  "warm apples",
  "cold melon",
  "toasted coconut",
  "mushrooms",
  "bell peppers",
  "fresh mint",
  "brown sugar",
  "maple drizzle",
  "lemon zest",
  "lime juice",
  "ginger",
  "vanilla cream",
  "cocoa dust",
  "crushed crackers",
  "yogurt",
  "noodle curls",
  "potato cubes",
  "berry sauce",
  "almond bits",
  "peanut crunch",
  "mango pieces",
  "pineapple chunks",
  "soft eggs",
  "smoked paprika"
];

const cookingMethods = [
  "stir",
  "toast",
  "roast",
  "fold",
  "simmer",
  "whisk",
  "shake",
  "melt",
  "layer",
  "crisp",
  "steam",
  "grill"
];

const servingIdeas = [
  "in a deep bowl",
  "on a warm plate",
  "inside a soft wrap",
  "with a tiny spoon",
  "beside crunchy toast",
  "over fluffy rice",
  "with a cool dip",
  "in little snack cups",
  "under a sprinkle topping",
  "with extra sauce"
];

const flavorGrid = document.querySelector("#flavorGrid");
const tabBar = document.querySelector("#bookTabs");
const loginView = document.querySelector("#loginView");
const cookbookView = document.querySelector("#cookbookView");
const loginForm = document.querySelector("#loginForm");
const recipeForm = document.querySelector("#recipeForm");
const chefName = document.querySelector("#chefName");
const recipeCategory = document.querySelector("#recipeCategory");
const savedRecipeList = document.querySelector("#savedRecipeList");
const backButton = document.querySelector("#backButton");
const nextRecipe = document.querySelector("#nextRecipe");
const prevRecipe = document.querySelector("#prevRecipe");

const chefGreeting = document.querySelector("#chefGreeting");
const bookTitle = document.querySelector("#bookTitle");
const recipeNumber = document.querySelector("#recipeNumber");
const recipeTitle = document.querySelector("#recipeTitle");
const recipeDescription = document.querySelector("#recipeDescription");
const recipeImage = document.querySelector("#recipeImage");
const recipeTime = document.querySelector("#recipeTime");
const recipeLevel = document.querySelector("#recipeLevel");
const ingredientList = document.querySelector("#ingredientList");
const stepList = document.querySelector("#stepList");

const recipes = Object.fromEntries(flavorNames.map((flavor) => [flavor, []]));
const savedRecipes = JSON.parse(localStorage.getItem("flavorBookSavedRecipes") || "[]");

let currentFlavor = "Salty";
let currentIndex = 0;
let currentChef = "Chef";

function pick(items, index, offset = 0) {
  return items[(index + offset) % items.length];
}

function getFlavorDetail(flavor) {
  return flavorDetails[flavor] || [
    flavor.split(/[- ]/)[0].slice(0, 6).toLowerCase(),
    `${flavor.toLowerCase()} recipes from the endless cookbook`
  ];
}

function pageCode(index) {
  return (index + 1).toString().padStart(3, "0");
}

function buildEndlessRecipe(flavor, index) {
  const detail = getFlavorDetail(flavor);
  const colorOffset = flavorNames.indexOf(flavor);
  const seed = index * 17 + colorOffset * 31;
  const ingredientA = pick(pantry, seed, colorOffset);
  const ingredientB = pick(extraPantry, seed, colorOffset + 5);
  const ingredientC = pick(extraPantry, seed, colorOffset + 13);
  const ingredientD = pick(pantry, seed, colorOffset + 9);
  const methodA = pick(cookingMethods, seed, colorOffset);
  const methodB = pick(cookingMethods, seed, colorOffset + 4);
  const food = pick(foods, seed, colorOffset);
  const starter = pick(titleStarters, seed, colorOffset + 2);
  const ending = pick(titleEndings, seed, colorOffset + 7);
  const code = pageCode(index);

  return {
    title: `${starter} ${flavor} ${food} ${ending} ${code}`,
    description: `Page ${code} is a different ${flavor.toLowerCase()} recipe with its own mix of ingredients, method, and serving idea.`,
    time: `${8 + ((seed * 5) % 38)} min`,
    level: index % 4 === 0 ? "Easy" : index % 4 === 1 ? "Medium" : "Fun",
    label: `${detail[0]} ${code}`,
    color: pick(colors, seed, colorOffset),
    ingredients: [
      `1 cup ${ingredientA}`,
      `2 spoons ${ingredientB}`,
      `A handful of ${ingredientC}`,
      `A pinch of ${ingredientD}`,
      `${1 + (index % 4)} splashes of ${flavor.toLowerCase()} flavor`
    ],
    steps: [
      `First ${methodA} the ${ingredientA} with the ${ingredientB}.`,
      `Add ${ingredientC} and ${methodB} until the recipe feels ${flavor.toLowerCase()}.`,
      `Finish with ${ingredientD} and taste page ${code}.`,
      `Serve ${pick(servingIdeas, seed, colorOffset)}.`
    ]
  };
}

function ensureRecipe(flavor, index) {
  while (recipes[flavor].length <= index) {
    recipes[flavor].push(buildEndlessRecipe(flavor, recipes[flavor].length));
  }
}

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function splitLines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function saveShelf() {
  localStorage.setItem("flavorBookSavedRecipes", JSON.stringify(savedRecipes));
}

function updateSelectedFlavor(value) {
  currentFlavor = value;
  document.querySelectorAll(".flavor-card").forEach((card) => {
    const input = card.querySelector("input");
    card.classList.toggle("selected", input.value === value);
  });
}

function renderCategoryOptions() {
  recipeCategory.innerHTML = "";

  flavorNames.forEach((flavor) => {
    const option = document.createElement("option");
    option.value = flavor;
    option.textContent = flavor;
    option.selected = flavor === currentFlavor;
    recipeCategory.appendChild(option);
  });
}

function renderFlavorPicker() {
  flavorGrid.innerHTML = "";

  flavorNames.forEach((flavor, index) => {
    const detail = getFlavorDetail(flavor);
    const card = document.createElement("label");
    card.className = `flavor-card${flavor === currentFlavor ? " selected" : ""}`;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "flavor";
    input.value = flavor;
    input.checked = flavor === currentFlavor;

    const icon = document.createElement("span");
    icon.className = "flavor-icon";
    icon.textContent = detail[0];
    icon.style.background = pick(colors, index);

    const title = document.createElement("strong");
    title.textContent = flavor;

    const description = document.createElement("small");
    description.textContent = detail[1];

    card.append(input, icon, title, description);
    card.addEventListener("click", () => updateSelectedFlavor(flavor));
    flavorGrid.appendChild(card);
  });
}

function customRecipeToBookRecipe(savedRecipe) {
  const detail = getFlavorDetail(savedRecipe.flavor);
  const colorOffset = flavorNames.indexOf(savedRecipe.flavor);

  return {
    title: savedRecipe.title,
    description: `Created by ${savedRecipe.chef}. Added to the ${savedRecipe.flavor.toLowerCase()} category from your own recipe shelf.`,
    time: "Your recipe",
    level: "Saved",
    label: detail[0],
    color: pick(colors, savedRecipe.id.length, colorOffset),
    ingredients: savedRecipe.ingredients,
    steps: savedRecipe.steps
  };
}

function addSavedRecipeToBook(savedRecipe) {
  const bookRecipe = customRecipeToBookRecipe(savedRecipe);
  recipes[savedRecipe.flavor].push(bookRecipe);
  currentFlavor = savedRecipe.flavor;
  currentIndex = recipes[savedRecipe.flavor].length - 1;
  renderTabs();
  renderRecipe();
}

function renderSavedRecipes() {
  savedRecipeList.innerHTML = "";

  if (savedRecipes.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No saved recipes yet.";
    savedRecipeList.appendChild(empty);
    return;
  }

  savedRecipes.forEach((savedRecipe) => {
    const card = document.createElement("article");
    card.className = "saved-card";

    const title = document.createElement("strong");
    title.textContent = savedRecipe.title;

    const category = document.createElement("small");
    category.textContent = `${savedRecipe.flavor} category`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add to Cookbook";
    button.addEventListener("click", () => addSavedRecipeToBook(savedRecipe));

    card.append(title, category, button);
    savedRecipeList.appendChild(card);
  });
}

function renderTabs() {
  tabBar.innerHTML = "";

  flavorNames.forEach((flavor) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.flavor = flavor;
    button.textContent = flavor;
    button.classList.toggle("active", flavor === currentFlavor);
    button.addEventListener("click", () => {
      currentFlavor = flavor;
      currentIndex = 0;
      renderRecipe();
    });
    tabBar.appendChild(button);
  });
}

function renderRecipe() {
  ensureRecipe(currentFlavor, currentIndex);
  const recipe = recipes[currentFlavor][currentIndex];

  chefGreeting.textContent = `${currentChef}'s shelf`;
  bookTitle.textContent = `${currentFlavor} Cookbook`;
  recipeNumber.textContent = `Recipe ${currentIndex + 1} of infinity`;
  recipeTitle.textContent = recipe.title;
  recipeDescription.textContent = recipe.description;
  recipeImage.dataset.label = recipe.label;
  recipeImage.style.setProperty("--dish-color", recipe.color);
  recipeTime.textContent = recipe.time;
  recipeLevel.textContent = recipe.level;
  renderList(ingredientList, recipe.ingredients);
  renderList(stepList, recipe.steps);

  document.querySelectorAll("#bookTabs button").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.flavor === currentFlavor);
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(loginForm);
  currentFlavor = form.get("flavor") || currentFlavor;
  currentChef = chefName.value.trim() || "Chef";
  currentIndex = 0;
  loginView.classList.add("hidden");
  cookbookView.classList.remove("hidden");
  renderCategoryOptions();
  renderTabs();
  renderSavedRecipes();
  renderRecipe();
});

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(recipeForm);
  const ingredients = splitLines(form.get("customIngredients") || "");
  const steps = splitLines(form.get("customSteps") || "");

  if (ingredients.length === 0 || steps.length === 0) {
    return;
  }

  savedRecipes.unshift({
    id: `${Date.now()}`,
    chef: currentChef,
    flavor: form.get("recipeCategory") || currentFlavor,
    title: (form.get("customTitle") || "My Recipe").trim(),
    ingredients,
    steps
  });

  saveShelf();
  recipeForm.reset();
  recipeCategory.value = currentFlavor;
  renderSavedRecipes();
});

nextRecipe.addEventListener("click", () => {
  currentIndex += 1;
  renderRecipe();
});

prevRecipe.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - 1);
  renderRecipe();
});

backButton.addEventListener("click", () => {
  cookbookView.classList.add("hidden");
  loginView.classList.remove("hidden");
  updateSelectedFlavor(currentFlavor);
});

renderFlavorPicker();
