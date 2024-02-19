"""
This script generates the css at `docs/stylesheets/simpleicons.css`.

It generates color for every tech which is specified in `data/simpleicons.json` file
using `simpleicons` library.

Go to simple-icons website: https://simpleicons.org
Check `simpleicons` library: https://github.com/sachinraja/simple-icons-py
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import TYPE_CHECKING

from simpleicons import icons

if TYPE_CHECKING:
    from simpleicons.icon import Icon

SIMPLEICONS_CSS_PATH = Path("docs/stylesheets/simpleicons.css")
SIMPLEICONS_JSON_PATH = Path("data/simpleicons.json")

UNAVAILABLE_ICONS = {
    "arc": "FCBFBD",
    "materialformkdocs": "526CFE",
    "polars": "CD792C",
    "pydantic": "E92063",
    "ruff": "D7FF64",
    "rye": "90c820",
}

logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s:    -  %(message)s",
)


def generate_tech_css(tech_data: dict[str, str]) -> str:
    """Generates CSS for each tech."""
    css_rules = [
        "/*\n😎 Generated by 'docs_src/generate_simpleicons_css.py'\n*/\n",
    ]
    for tech, color in tech_data.items():
        if tech.endswith("-hover"):
            css_rules.append(f".{tech}:hover {{ color: #{color}; }}")
        else:
            css_rules.append(f".{tech} {{ color: #{color}; }}")
    return "\n".join(css_rules) + "\n"


def from_unavailable_dict(tech: str) -> str:
    try:
        return UNAVAILABLE_ICONS[tech]
    except KeyError:
        logging.error(f"{tech!r} not present in UNAVAILABEL_ICONS dict.")
        return "FFFFF"


def generate_simpleicons_css() -> None:
    simpleicons_data: set[str] = set(json.loads(SIMPLEICONS_JSON_PATH.read_bytes()))

    tech_colors: dict[str, str] = {}
    for tech in sorted(simpleicons_data):
        try:
            icon: Icon = getattr(icons, f"si_{tech}")
        except AttributeError:
            logging.warning(f"{tech!r} not in 'simpleicons.icon' module.")
            tech_color = from_unavailable_dict(tech)
            tech_colors[tech] = tech_color
            tech_colors[f"{tech}-hover"] = tech_color
            continue
        else:
            tech_colors[tech] = icon.hex
            tech_colors[f"{tech}-hover"] = icon.hex

    simpleicons_css = generate_tech_css(tech_colors)
    SIMPLEICONS_CSS_PATH.write_text(simpleicons_css)


if __name__ == "__main__":
    generate_simpleicons_css()
