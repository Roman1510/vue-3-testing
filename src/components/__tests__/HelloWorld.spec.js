import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Timeline from "../TimeLine.vue";

describe("Timeline", () => {
  it("renders properly", () => {
    const wrapper = mount(Timeline, { props: { msg: "Today" } });
    expect(wrapper.text()).toContain("Today");
  });
});
