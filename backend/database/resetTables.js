import { dropTables } from "./dropTables.js";
import { createTables } from "./createTables.js";
import { seedTables } from "./seedTables.js";

// call the functions
export async function resetTables() {
  await dropTables();
  await createTables();
  await seedTables();
}

resetTables();
