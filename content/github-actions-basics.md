---
title: "GitHub Actions Basics"
date: "2026-04-07"
summary: "Some notes about workflows, jobs, and steps."
---

# GitHub Actions Basics

A workflow contains jobs.

A job contains steps.

A step can use:

- `uses`
- `run`

Example:

```yaml
- name: Checkout code
  uses: actions/checkout@v4
  

---

# 10. CI workflow

## `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches:
      - main
      - dev
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Run lint
        run: npm run lint

      - name: Build project
        run: npm run build