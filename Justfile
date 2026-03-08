@_default:
    just --list

# Install pre-commit and pre-push hooks with `prek`
install-hooks:
    bunx prek install --hook-type=pre-commit
    bunx prek install --hook-type=pre-push

# Generate new-content template and write to stdout
[arg("type", pattern="blog|projects")]
[no-exit-message]
new-content type title description icon="lucide:notebook-pen":
    #!/usr/bin/env bash
    set -euo pipefail

    FILE='content/{{ type }}{{ if type == "blog" { datetime("/%Y") } else { "" } }}/{{ trim(replace_regex(lowercase(title), "[^a-z0-9]+", "-")) }}.md'

    [[ ! -e "$FILE" ]] || { echo "✖ file already exists: $FILE" >&2; exit 1; };

    cat > $FILE <<EOF
    ---
    title: {{ title }}
    description: {{ description }}
    icon: {{ icon }}
    pubDate: {{ datetime("%Y-%m-%d") }}
    categories: [{{ type }}]
    ---
    EOF

    echo "✔ Created {{ type }}: $FILE"

# Create new journal file at expected path
[no-exit-message]
new-journal icon="lucide:notebook-pen":
    #!/usr/bin/env bash
    set -euo pipefail

    FILE='content/journal/{{ datetime("%Y/%m") }}.md'

    [[ ! -e "$FILE" ]] || { echo "✖ file already exists: $FILE" >&2; exit 1; };

    cat > $FILE <<EOF
    ---
    title: {{ datetime("%B") }} Journal
    description: Weekly Journal by ARV of {{ datetime("%B %Y") }}
    icon: {{ icon }}
    pubDate: {{ datetime("%Y-%m-01") }}
    categories: [journal, {{ lowercase(datetime("%B")) }}]
    ---

    ## Week {{ datetime("%V") }} Journal
    EOF

    echo "✔ Created journal: $FILE"
