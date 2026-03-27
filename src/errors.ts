/**
 * Custom error classes for github-empty-repo-bootstrap.
 */

/**
 * Base error class for all GithubEmptyRepoBootstrap errors.
 */
export class GithubEmptyRepoBootstrapError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "GITHUBEMPTYREPOBOOTSTRAP_ERROR") {
    super(message);
    this.name = "GithubEmptyRepoBootstrapError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends GithubEmptyRepoBootstrapError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends GithubEmptyRepoBootstrapError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends GithubEmptyRepoBootstrapError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
