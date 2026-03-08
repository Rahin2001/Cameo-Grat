import pathlib
import re
import pytest

GITIGNORE_PATH = pathlib.Path("gitignore")

# Expected patterns (exact match or starts‑with for directory patterns)
EXPECTED_PATTERNS = {
    "__pycache__/",
    "*.pyc",
    "*.pyo",
    ".env",
    ".env.local",
    ".venv/",
    "venv/",
    "env/",
    "*.egg-info/",
    "dist/",
    "build/",
    ".mypy_cache/",
    ".pytest_cache/",
    "temp_repos/",
    "qdrant_data/",
}


def _load_gitignore() -> set[str]:
    """Read the .gitignore file and return a set of stripped non‑empty lines."""
    if not GITIGNORE_PATH.is_file():
        raise FileNotFoundError(f"{GITIGNORE_PATH} does not exist")
    return {line.strip() for line in GITIGNORE_PATH.read_text().splitlines() if line.strip()}


@pytest.mark.parametrize("pattern", EXPECTED_PATTERNS)
def test_gitignore_contains_all_expected_patterns(pattern: str):
    """Verify that each expected pattern appears in the .gitignore file."""
    lines = _load_gitignore()
    assert pattern in lines, f"Expected pattern '{pattern}' not found in {GITIGNORE_PATH}"


def test_gitignore_no_extra_patterns():
    """Optionally ensure only expected patterns are present (strict mode)."""
    lines = _load_gitignore()
    unexpected = lines - EXPECTED_PATTERNS
    assert not unexpected, f"Found unexpected pattern(s) in {GITIGNORE_PATH}: {sorted(unexpected)}"