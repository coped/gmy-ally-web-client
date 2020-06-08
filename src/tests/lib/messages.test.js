import Messages from "lib/messages";

describe("Messages", () => {
  it("creates a new message", () => {
    const content = {
      type: "info",
      message: "Hello",
    };
    const newMessage = Messages.create({ ...content });
    expect(newMessage.type).toEqual(content.type);
    expect(newMessage.message).toEqual(content.message);
  });
});
