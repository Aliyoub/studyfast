import { NextResponse } from "next/server";

// import * as AWS from 'aws-sdk';
const AWS = require("aws-sdk");

// =============================================
// export async function GET() {
//   try {
//     const users = getAllUsers();
//     return NextResponse.json({ success: true, users });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: (error as Error).message },
//       { status: 500 }
//     );
//   }
// }
// =============================================
export default async function GET() {
  // Configure AWS S3 access
  const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: "us-east-1", // Example: 'us-east-1'
  });

  // Define the S3 bucket and object (file) name
  const params = {
    Bucket: "studyfast-01",
    Key: "firebase-config.json", // The file you uploaded to S3
  };

  try {
    // Fetch the file from S3
    const data = await s3.getObject(params).promise();

    // Parse the JSON data
    const firebaseConfig = JSON.parse(data.Body.toString());

    // Send the Firebase config back in response
    // res.status(200).json({ firebaseConfig });
    console.log(
      "Firebase config back in response",
      "Firebase config back in response"
    );
    return NextResponse.json({ success: true, firebaseConfig });
  } catch (error) {
    console.error("Error fetching Firebase config:", error);
    // res.status(500).json({ error: 'Error fetching Firebase config from S3' });
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
