import { en } from "./en";
import { es } from "./es";
import { messages } from "./messages";

let exitCode = 0;

for (const id in messages) {
  if (en[id as keyof typeof en] === undefined) {
    console.error(`ERROR: English translation of "${id}" not found`);
    exitCode = 1;
  }
  if (es[id as keyof typeof es] === undefined) {
    console.error(`ERROR: Spanish translation of "${id}" not found`);
    exitCode = 1;
  }
  if (messages[id].id !== id) {
    console.error(
      `ERROR: Message descriptor for "${id}" has a different id than its key`
    );
    exitCode = 1;
  }
  if (!messages[id].description) {
    console.error(
      `ERROR: Message descriptor for "${id}" is missing a description`
    );
    exitCode = 1;
  }
  if (messages[id].defaultMessage === undefined) {
    console.error(
      `ERROR: Message descriptor for "${id}" is missing a default message`
    );
    exitCode = 1;
  }
}

process.exit(exitCode);
