const {
    SQSClient,
    ListQueuesCommand,
    SendMessageCommand,
    ReceiveMessageCommand,
    DeleteMessageCommand,
  } = require("@aws-sdk/client-sqs");
  
  const sqsClient = new SQSClient({
    // endpoint: "http://localhost:4000",
    region: "ap-south-1",
  });
  
  const queue_url = "https://sqs.ap-south-1.amazonaws.com/730335475860/another";
  
  async function main() {
    // Get list of queues
    const listQueuesCommand = new ListQueuesCommand({
      QueueNamePrefix: "test",
    });
    const queues = await sqsClient.send(listQueuesCommand);
  
    console.log(queues);

    // // Send message to the queue
    // const sendMessageCommand = new SendMessageCommand({
    //   QueueUrl: queue_url,
    //   MessageBody: JSON.stringify({
    //     hello: "world",
    //   }),
    // });
    // const messageInfo = await sqsClient.send(sendMessageCommand);
    // console.log(messageInfo);
  
    // Receive message from the queue
    const receiveMessage = new ReceiveMessageCommand({
      QueueUrl: queue_url,
    });
    const message = await sqsClient.send(receiveMessage);
    console.log(message);
  
    // Process the message
    // Get the receiptHandle of the message after processing
    // const receiptHandle = message.Messages[0].ReceiptHandle;
  
    // // Delete the message after processing
    // const deleteMessageCommand = new DeleteMessageCommand({
    //   QueueUrl: queue_url,
    //   ReceiptHandle: receiptHandle,
    // });
    // await sqsClient.send(deleteMessageCommand);
  }
  
  main()
    .then(() => console.log("done"))
    .catch((err) => console.log(err));