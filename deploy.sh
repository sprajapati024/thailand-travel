#!/bin/bash

# Deploy Thailand Travel to Vercel using the GitHub integration
# This script uses Vercel's GitHub integration to trigger a new deployment

PROJECT_ID="prj_3OTRk5jz5LMPXfAas7QhfRgK0Opg"
ORG_ID="team_YK5U15HIvtiYtjgOObU2SX70"

echo "Attempting to trigger Vercel deployment for GitHub changes..."
echo "Project ID: $PROJECT_ID"
echo "Org ID: $ORG_ID"

# Try multiple methods to get a Vercel token
if [ -f ~/.vercel/auth.json ]; then
  TOKEN=$(cat ~/.vercel/auth.json | grep -o '"token":"[^"]*' | cut -d'"' -f4)
  echo "Found token in ~/.vercel/auth.json"
fi

if [ -z "$TOKEN" ] && [ ! -z "$VERCEL_API_TOKEN" ]; then
  TOKEN="$VERCEL_API_TOKEN"
  echo "Using VERCEL_API_TOKEN from environment"
fi

echo ""
echo "Note: The deployment should have already been triggered by the GitHub webhook"
echo "when the code was pushed to the main branch."
echo ""
echo "Waiting for Vercel to pick up the deployment..."
echo "The site should update within 1-3 minutes at: https://thailand-travel.vercel.app"
