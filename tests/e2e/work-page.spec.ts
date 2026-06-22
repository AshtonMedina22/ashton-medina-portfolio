import { expect, test } from "@playwright/test";

const thumbnailText = [
  "Order -> Execution",
  "Order \u2192 Execution",
  "Profile Control",
  "handoff status",
  "risk state",
  "Signed",
  "Scoped",
  "Assigned",
];

test("work page cards render without project thumbnails and keep equal row sizing", async ({
  page,
}) => {
  await page.goto("/work");

  for (const text of thumbnailText) {
    await expect(page.getByText(text)).toHaveCount(0);
  }

  const cards = page.locator('a[href^="/work/"]:not([href$="/demo"])');
  await expect(cards).toHaveCount(8);

  const boxes = await cards.evaluateAll((elements) =>
    elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    }),
  );

  const rows = new Map<number, typeof boxes>();
  for (const box of boxes) {
    rows.set(box.top, [...(rows.get(box.top) || []), box]);
  }

  for (const row of rows.values()) {
    const first = row[0];
    for (const box of row) {
      expect(box.width).toBe(first.width);
      expect(box.height).toBe(first.height);
    }
  }
});
