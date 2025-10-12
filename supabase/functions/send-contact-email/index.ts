import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { formData } = await req.json()
    
    const fullName = formData.name || `${formData.firstName || ''} ${formData.lastName || ''}`.trim()
    
    // Email content
    const emailContent = {
      from: "leads.techvexor@gmail.com",
      to: "leads.techvexor@gmail.com",
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          </div>
          
          ${formData.projectType || formData.budget ? `
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Project Details</h3>
            ${formData.projectType ? `<p><strong>Project Type:</strong> ${formData.projectType}</p>` : ''}
            ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
          </div>
          ` : ''}
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the Tech Vexor contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }

    // Send email using Gmail SMTP
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'contact_form',
        user_id: Deno.env.get('EMAILJS_USER_ID'),
        template_params: {
          to_email: 'leads.techvexor@gmail.com',
          from_name: fullName,
          from_email: formData.email,
          message: formData.message,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          project_type: formData.projectType || 'Not specified',
          budget: formData.budget || 'Not specified'
        }
      })
    })

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    } else {
      throw new Error('Failed to send email')
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})