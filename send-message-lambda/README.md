# S3 Image Upload Lambda Function
This Lambda function is designed to be triggered whenever a new file is uploaded to an S3 bucket. It checks if the uploaded file is an image and sends a notification if it is.

## Functionality
1. **Trigger:** The Lambda function is triggered by S3 events, specifically the 'ObjectCreated' event. Whenever a new file is uploaded to the specified S3 bucket, the Lambda function is invoked.

2. **Verification:** Upon invocation, the function checks if the uploaded file is an image. It does this by inspecting the file extension and comparing it against a list of common image extensions (.jpg, .jpeg, .png, .gif, .bmp, .webp).

3. **Notification:** If the uploaded file is determined to be an image, the function sends a notification using Amazon SNS (Simple Notification Service). The notification includes details about the uploaded image, such as the S3 bucket name and object key.

## Implementation Considerations
When implementing this Lambda function, consider the following:

1. **IAM Permissions:** Ensure that the Lambda function has the necessary IAM permissions to access S3 buckets and publish messages to SNS topics. It's recommended to use IAM roles attached to the Lambda function rather than hardcoding credentials in the code.

2. **S3 Trigger Configuration:** Set up the Lambda function to be triggered by S3 events. Configure the trigger to listen for 'ObjectCreated' events in the desired S3 bucket.

3. **SNS Topic:** Create an SNS topic that will be used for sending notifications. Configure any necessary subscriptions (e.g., email, SMS) to receive the notifications.

## Configuration
Before deploying the Lambda function, make sure to configure the following:

- Replace the placeholder values (e.g., `region`, `account-id`, `topic-name`) in the Lambda function code with your actual AWS region, account ID, and SNS topic name.

## Deployment
During the deploy of the Lambda function, ensure that the Lambda function is properly configured with the necessary triggers, permissions, and environment variables.