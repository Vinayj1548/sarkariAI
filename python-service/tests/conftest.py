from pathlib import Path

import pytest


@pytest.fixture
def sample_text():
    with open(
        Path("data/pdfs/output.txt"),
        "r",
        encoding="utf-8"
    ) as file:
        return file.read()