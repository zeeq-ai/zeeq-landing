#!/usr/bin/env bash

pnpm --filter web build

firebase deploy --only hosting --project zeeq-ai-prod
