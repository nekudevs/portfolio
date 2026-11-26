# Code review instructions

## Issues

- Prioritise bugs, security problems, leaked secrets and data loss over style.
- Leave inline comments on the affected lines and explain the concrete failure.

## Scope and acceptance criteria

- Compare the diff with the `Scope` and `Acceptance Criteria` sections of the pull request description.
- Flag each criterion the diff does not meet, and any change outside the stated scope.
- Flag a description that is missing either section.

## Tests

- Flag bug fixes with no test that reproduces the bug.
- Flag core logic that has no focused test.
- Do not ask for boilerplate or redundant tests.
