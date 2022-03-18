import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import ChatForm from "../components/ChatForm.vue";

test("mount component", async () => {
  expect(ChatForm).toBeTruthy();

  const wrapper = mount(ChatForm, {
    props: {
      messages: ["e"],
    },
  });

  expect(wrapper.text()).toContain("e");
});
