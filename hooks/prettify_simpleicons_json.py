import json
import sys
from pathlib import Path

SIMPLEICONS_JSON_PATH = Path("data/simpleicons.json")


def load_simpleicons_json():
    try:
        with SIMPLEICONS_JSON_PATH.open() as f:
            data = json.load(f)
    except FileNotFoundError:
        print(
            f"FileNotFoundError: {SIMPLEICONS_JSON_PATH} does not exist",
            file=sys.stderr,
        )
        raise SystemExit(1) from None
    return data


def save_simpleicons_json(data):
    with SIMPLEICONS_JSON_PATH.open("w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")  # add newline


def main() -> int:
    data = load_simpleicons_json()

    # check if data is a list (required format)
    if not isinstance(data, list):
        print(f"{SIMPLEICONS_JSON_PATH} must be a list.", file=sys.stderr)
        return 1

    # remove duplicates and sort the data
    data = sorted(set(data))
    save_simpleicons_json(data)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
