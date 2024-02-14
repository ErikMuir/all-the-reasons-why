#!/bin/bash
set -e

echo "Deploying static web site..."
aws s3 sync ./src s3://allthereasonswhyiloveyou.com
echo "Done."
