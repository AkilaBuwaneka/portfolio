// Resume Download Utility

/**
 * Downloads the resume file
 * @param resumeUrl - The URL of the resume file (can be local path or external URL)
 */
export const downloadResume = (resumeUrl: string = '/resume.pdf'): void => {
  // Create an anchor element
  const link = document.createElement('a');
  link.href = resumeUrl;
  
  // Set download attribute with filename
  const filename = 'Akila_Buwaneka_Resume.pdf';
  link.download = filename;
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Opens resume in a new tab
 * @param resumeUrl - The URL of the resume file
 */
export const viewResume = (resumeUrl: string = '/resume.pdf'): void => {
  window.open(resumeUrl, '_blank');
};

/**
 * Smart resume handler - downloads if local file, opens in new tab if external URL
 * @param resumeUrl - The URL of the resume file
 */
export const handleResume = (resumeUrl: string = '/resume.pdf'): void => {
  // Check if it's an external URL (Google Drive, Dropbox, etc.)
  if (resumeUrl.startsWith('http://') || resumeUrl.startsWith('https://')) {
    // If it's a Google Drive download link or similar, trigger download
    if (resumeUrl.includes('drive.google.com') || resumeUrl.includes('download')) {
      window.location.href = resumeUrl;
    } else {
      // Otherwise open in new tab
      viewResume(resumeUrl);
    }
  } else {
    // Local file - trigger download
    downloadResume(resumeUrl);
  }
};

/**
 * Check if resume file exists
 * @param resumeUrl - The URL of the resume file
 * @returns Promise<boolean> - true if file exists
 */
export const checkResumeExists = async (resumeUrl: string = '/resume.pdf'): Promise<boolean> => {
  try {
    const response = await fetch(resumeUrl, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.warn('Resume file not found:', error);
    return false;
  }
};
