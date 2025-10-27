// Email Service Utility - Web3Forms Implementation
// Simple, free contact form solution using Web3Forms API

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send contact form email using Web3Forms
 * 
 * Setup Instructions:
 * 1. Sign up at https://web3forms.com/
 * 2. Get your Access Key
 * 3. Add to .env file: VITE_WEB3FORMS_ACCESS_KEY=your_access_key
 * 
 * Features:
 * - No installation required
 * - 250 free submissions per month
 * - Email notifications
 * - Spam protection
 * 
 * @param data - Contact form data
 * @returns Promise<boolean> - true if email sent successfully
 */
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Check if access key is configured
    if (!ACCESS_KEY) {
      console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
      throw new Error('Web3Forms not configured. Please add your access key to the .env file.');
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);
    formData.append('redirect', 'false'); // Don't redirect after submission

    // Send to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email');
    }
    
    console.log('Email sent successfully via Web3Forms');
    return true;
    
  } catch (error) {
    console.error('Web3Forms Error:', error);
    throw error;
  }
};
