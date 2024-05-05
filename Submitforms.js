// submitForms.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ahsan1fak@gmail.com', // Your Gmail email address
    pass: 'ahsan24726' // Your Gmail password
  }
});

async function sendEmail(name, email, subject) {
  try {
    await transporter.sendMail({
      from: 'Your Name <ahsan1fak@gmail.com>', // Your name and email address
      to: 'ahsan1fak@gmail.com', // Your Gmail email address
      subject,
      text: `Name: ${name}\nEmail: ${email}`
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, formType } = req.body;
    let subject = '';
    if(formType === 'form1') {
      subject = 'Form 1 Submission';
    } else if(formType === 'form2') {
      subject = 'Form 2 Submission';
    } else {
      res.status(400).json({ message: 'Invalid form type' });
      return;
    }
    // Send email
    await sendEmail(name, email, subject);
    res.status(200).json({ message: `${subject} submitted successfully` });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

