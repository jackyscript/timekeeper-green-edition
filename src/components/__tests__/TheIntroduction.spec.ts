import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheIntroduction from "../TheIntroduction.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(TheIntroduction, {
      props: { title: "Timekeeper", type: "green edition" },
    });
    expect(wrapper.text()).toContain("Timekeeper");
    expect(wrapper.text()).toContain("green edition");
  });
});
