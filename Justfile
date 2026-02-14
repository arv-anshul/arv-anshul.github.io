# Install pre-commit and pre-push hooks with `prek`
install-hooks:
    bunx prek install --hook-type=pre-commit
    bunx prek install --hook-type=pre-push
