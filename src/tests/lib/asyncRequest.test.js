import AsyncRequest from "lib/asyncRequest";
import ApiEndpoints from "lib/apiEndpoints";

describe("AsyncRequest", () => {
  describe("get", () => {
    const mockSuccessResponse = { status: "success" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    it("sends a get request", async () => {});
  });
});
