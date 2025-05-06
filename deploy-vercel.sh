#!/bin/bash

# Build for Vercel deployment
echo "Building for Vercel deployment..."
export VERCEL=1
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Ready for Vercel deployment."
else
  echo "Build failed. Please check the errors above."
  exit 1
fi

echo "Run 'vercel' or 'vercel --prod' to deploy to Vercel." 