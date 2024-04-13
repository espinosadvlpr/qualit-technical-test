import os
import boto3

def lambda_handler(event, context):
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']
    
    if is_image(object_key):
        send_notification(bucket_name, object_key)

def is_image(file_key):
    _, extension = os.path.splitext(file_key)
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']
    return extension.lower() in image_extensions

def send_notification(bucket_name, object_key):
    sns_client = boto3.client('sns')
    sns_topic_arn = 'arn:aws:sns:region:account-id:topic-name'
    message = f"New image uploaded to S3 bucket '{bucket_name}': '{object_key}'"
    
    sns_client.publish(
        TopicArn=sns_topic_arn,
        Message=message,
        Subject="New Image Uploaded to S3 Bucket"
    )