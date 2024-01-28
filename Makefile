.ONESHELL:

SHELL := /bin/bash
.DEFAULT_GOAL := help

PYTHON := python3

help:  ## Help command of Makefile
	@$(PYTHON) <(curl -sSL https://gist.githubusercontent.com/arv-anshul/84a87b6ac9b15f51b9b8d0cdeda33f5f/raw/f48d6fa8d2e5e5769af347e8baa2677cc254c5c6/make_help_decorator.py)

# ---------------- MkDocs Related ----------------

.PHONY: docs

DOCS := docs/

docs: $(DOCS)  ## Build docs with mkdocs
	mkdocs build

clean-site: site/  ## Remove site directory
	@echo "Removing 'site/' directory..."
	rm -rf $<

icon-css: docs_src/generate_simpleicons_css.py
	$(PYTHON) $<

# ---------------- Essential Commands ----------------

clean: clean-site clean-venv  ## Clean files and folders like [.venv/, site/]

clean-venv: .venv/  ## Remove .venv/ directory
	@echo "Removing '.venv/' directory..."
	rm -rf $<

# ---------------- pre-commit commands ----------------

PRE_COMMIT_YAML := .pre-commit-config.yaml

install-hooks: $(PRE_COMMIT_YAML)  ## Install `pre-commit-hooks` on local directory
	$(PYTHON) -m pip install pre-commit
	pre-commit install --install-hooks -c $<

pc: $(PRE_COMMIT_YAML)  ## Run `pre-commit` on staged files
	pre-commit run -c $<

pc-all: $(PRE_COMMIT_YAML)  ## Run `pre-commit` on all files
	pre-commit run --all-files -c $<
