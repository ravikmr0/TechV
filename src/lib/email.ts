import emailjs from '@emailjs/browser';

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

// Initialize EmailJS (you'll need to set up EmailJS account)
const EMAILJS_SERVICE_ID = 'service_techvexor';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

// Send email using EmailJS
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const fullName = formData.name || `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    
    // Prepare template parameters
    const templateParams = {
      to_email: 'leads.techvexor@gmail.com',
      from_name: fullName,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      project_type: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message,
      timestamp: new Date().toLocaleString()
    };

    // For now, let's use a simple fetch to a webhook service
    // This is a temporary solution until you set up EmailJS
    const response = await fetch('https://hook.eu1.make.com/your-webhook-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'leads.techvexor@gmail.com',
        subject: `New Contact Form Submission from ${fullName}`,
        name: fullName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        projectType: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        message: formData.message,
        timestamp: new Date().toLocaleString()
      }),
    });

    // Alternative: Use EmailJS (uncomment when configured)
    /*
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    return result.status === 200;
    */

    // For immediate testing, let's create a mailto link approach
    const mailtoLink = `mailto:leads.techvexor@gmail.com?subject=New Contact Form Submission from ${encodeURIComponent(fullName)}&body=${encodeURIComponent(`
Contact Details:
Name: ${fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Project Type: ${formData.projectType || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}

Submitted on: ${new Date().toLocaleString()}
    `)}`;

    // Open mailto link
    window.open(mailtoLink, '_blank');
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Send auto-reply
export const sendAutoReply = async (userEmail: string, userName: string): Promise<boolean> => {
  try {
    // For auto-reply, we'll use a simple approach for now
    console.log(`Auto-reply notification for ${userName} at ${userEmail}`);
    return true;
  } catch (error) {
    console.error('Error sending auto-reply:', error);
    return false;
  }
};