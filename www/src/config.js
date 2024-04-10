// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6a8qpeb5smdjb6fd8qbfqnbdts",     // CognitoClientID
  "api_base_url": "https://7nhm2n5di0.execute-api.eu-north-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-test-app.auth.eu-north-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d17iv6d4h33khk.amplifyapp.com"                                      // AmplifyURL
};

export default config;
