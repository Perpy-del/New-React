import React from "react";
import { act } from "react-dom/test-utils";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("that getFullYear returns the correct year", () => {
  expect(getFullYear()).toBe(2023);
});

test("that getFooterCopy returns the correct string when true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("that getFooterCopy returns the correct string when false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("that getLatestNotifications returns the correct html string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
