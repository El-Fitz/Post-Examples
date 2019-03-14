# Variabilizing Serverless resources with the Serverless framework

A repo containing the setup project for //FIXME: Add link to post

# Setup

Clone, go to this project's subfolder, run `npm install` and `npm install -i serverless`

# Deploy

Run `sls deploy --stage YOUR_STAGE`. Stage will default to dev, and region to us-east-1

# Clean up

Run `sls remove --stage YOUR_STAGE`. DynamoDB tables with the deletion policy set to `Reaint` will have to be removed manually via aws-cli or the aws console.

# Completed project sources

You can find the completed project's sources over at the completed branch.