/**
 * Configuration options for GithubEmptyRepoBootstrap.
 */
export interface GithubEmptyRepoBootstrapOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Generates TS package scaffold (tsconfig, eslint, vitest, build scripts)
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Creates CI workflows (tests, release, changelog, provenance)
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Interactive prompts for package name, license, and publish settings
   */
  feature3?: Record<string, unknown>;
}

/**
 * Result returned by GithubEmptyRepoBootstrap operations.
 */
export interface GithubEmptyRepoBootstrapResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
