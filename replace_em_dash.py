#!/usr/bin/env python3
# Replace all em-dashes (-) with standard hyphens (-) across the EmotionDeck project
# English-only code comments per user preference

from pathlib import Path

# Directories to skip
EXCLUDE_DIRS = {
    ".git",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
    "public/models",
    "private_images",
}

# Function to process a single file
def process_file(path: Path, do_write: bool):
    try:
        text = path.read_text(encoding="utf-8")
    except Exception:
        return False  # skip unreadable/binary files

    if "-" in text:
        new_text = text.replace("-", "-")
        if do_write:
            path.write_text(new_text, encoding="utf-8")
        return True
    return False


# Main function
def main(root: Path, dry_run: bool):
    changed_files = []
    for p in root.rglob("*"):
        if not p.is_file():
            continue
        if any(part in EXCLUDE_DIRS for part in p.parts):
            continue
        try:
            if process_file(p, do_write=not dry_run):
                changed_files.append(str(p))
        except Exception:
            continue

    # Summary
    if dry_run:
        print("\n🔍 Dry run - files containing em-dash (-):")
    else:
        print("\n✅ Replacement complete - modified files:")

    for f in changed_files:
        print(f)
    print(f"\nTotal files affected: {len(changed_files)}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Replace em-dash (-) with hyphen (-) across EmotionDeck.")
    parser.add_argument("--dry-run", action="store_true", help="Only show affected files, no write.")
    parser.add_argument("--root", default=".", help="Project root directory (default: current).")
    args = parser.parse_args()

    main(Path(args.root), args.dry_run)
