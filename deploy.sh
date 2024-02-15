#!/bin/bash
set -e

npm run build
echo "Deploying..."
aws s3 sync ./src s3://allthereasonswhyiloveyou.com
echo "Done."
