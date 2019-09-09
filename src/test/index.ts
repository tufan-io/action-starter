
import test from "ava";
import { run } from "..";

test(`main`, async (t) => {
  // tslint:disable-next-line: no-console
  await run();
  t.pass();
});
