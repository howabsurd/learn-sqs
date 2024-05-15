// const { SQSClient, AddPermissionCommand } = require("@aws-sdk/client-sqs"); //ES Modules import
// // const { SQSClient, AddPermissionCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
// const input = { // AddPermissionRequest
//     QueueUrl: "https://sqs.ap-south-1.amazonaws.com/730335475860/another", // required
//     Label: "", // required
//     AWSAccountIds: [ // AWSAccountIdList // required
//     "730335475860",
// ],
// Actions: [ // ActionNameList // required
// "*",
// ],
// };
// const command = new AddPermissionCommand(input);

// const client = new SQSClient(command);

// const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs");

// // Configure the AWS region
// const client = new SQSClient({ 
//     endpoint : "https://sqs.ap-south-1.amazonaws.com/730335475860/another",
//     region: "ap-south-1"
//  });
// // AWS.config.update({ region: "ap-south-1" });

// // Create an SQS service object
// // const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });  



// async function main(){
//     const listQueue = new ListQueuesCommand({
//         QueueNamePrefix : "another"
//     })

//     const queues = await client.send(listQueue);
//     console.log({queues});
// }

// main().then(()=>console.log("done")).catch(err =>console.log(err))

// // const params = {
// //     /** input parameters */
// //     QueueUrl : "https://sqs.ap-south-1.amazonaws.com/730335475860/tester",
// //     AWSAccountIds: [ // AWSAccountIdList // required
// //     "730335475860",
// //   ],
// //     Label: "MyLabel",
// //     Actions: ["SendMessage", "ReceiveMessage"],
// //   };
// //   const command = new ListQueuesCommand(params);

// // const sendMessage = async(messageBody)=>{
// //     try {
// //         const data = await client.send(command);
// //         // process data.
// //       } catch (error) {
// //         // error handling.
// //         console.log(error);
// //       } finally {
// //         // finally.
// //       }
// // }

const AWS = require("aws-sdk");

// Configure the AWS region
AWS.config.update({ region: "ap-south-1" });

// Create an SQS service object
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });


const queueURL = "https://sqs.ap-south-1.amazonaws.com/730335475860/another";


const sendMessage = async (messageBody) => {
    const params = {
      QueueUrl: queueURL,
      MessageBody: messageBody,
    };
  
    try {
      const data = await sqs.sendMessage(params).promise();
      console.log("Message sent, ID:", data.MessageId);
    } catch (err) {
      console.error("Error", err);
    }
  };


  sendMessage("Hello, SQS!");