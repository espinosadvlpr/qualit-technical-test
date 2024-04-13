# Static Website Deployment Template
This CloudFormation template automates the deployment of a static website on Amazon Web Services (AWS) using an S3 bucket. 

## How it Works
1. AWS Resources Created:
   * S3 Bucket: The template creates an S3 bucket to store the website files. The bucket is configured for static website hosting and serves the specified index document (usually index.html).

2. Deployment Process:
   * Upload your website files (HTML, CSS, JavaScript, etc.) to the S3 bucket created by the template.
   * Once the files are uploaded, AWS automatically makes them available via the internet using the bucket's URL.

3. Accessing the Website:
   * After deploying the template, you'll receive the URL of the website hosted on the S3 bucket. You can access your website using this URL.