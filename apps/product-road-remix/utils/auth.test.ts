import { describe, expect, it } from "vitest";

import { validateEmail } from "./auth";

describe("[Auth Utils] IsValidEmail", () => {
  const valid_email = "oussama@gmail.com";
  const invalid_email = "oussama.email.com";

  it("Should return false if email is not valid", () => {
    expect(validateEmail(invalid_email)).toBe(false);
  });

  it("Should return true if email is valid", () => {
    expect(validateEmail(valid_email)).toBe(true);
  });
});
