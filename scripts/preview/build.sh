#!/usr/bin/env bash
# Builds the static click-through preview into preview-dist/.
# Usage: bash scripts/preview/build.sh [folder-containing-media/]
set -euo pipefail
cd "$(dirname "$0")/../.."
mv app/api /tmp/projectprc-api-hold
trap 'mv /tmp/projectprc-api-hold app/api' EXIT
rm -rf out
PREVIEW_EXPORT=1 NEXT_PUBLIC_PREVIEW=1 NEXT_PUBLIC_MEDIA_BASE=/media npx next build
python3 scripts/preview/postprocess.py "${1:-}"
