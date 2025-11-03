export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

// Send email via Vercel API endpoint
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Email sending failed:', error);
      return false;
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Auto-reply is handled by the API endpoint
export const sendAutoReply = async (userEmail: string, userName: string): Promise<boolean> => {
  // Auto-reply is sent automatically by the API endpoint
  return true;
};