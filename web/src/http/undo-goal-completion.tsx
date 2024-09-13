export async function undoGoalCompletion(goalId: string) {
  await fetch("http://localhost:3333/completions/undo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });
}
