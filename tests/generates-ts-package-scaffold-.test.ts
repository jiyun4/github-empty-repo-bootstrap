import { describe, it, expect } from "vitest";
import { GithubEmptyRepoBootstrap } from "../src";

describe("GithubEmptyRepoBootstrap", () => {
  it("should create an instance with default options", () => {
    const instance = new GithubEmptyRepoBootstrap();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new GithubEmptyRepoBootstrap({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new GithubEmptyRepoBootstrap();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
