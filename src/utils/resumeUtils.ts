export const downloadResume = (resumeUrl: string = '/Akila_Buwaneka_Fullstack_Software_Engineer.pdf'): void => {
  // Create an anchor element
  const link = document.createElement('a');
  link.href = resumeUrl;

  // Derive a filename from the URL (use the last path segment) and fall back to a sensible default
  const parts = resumeUrl.split('/').filter(Boolean);
  const lastSegment = parts.length > 0 ? parts[parts.length - 1] : 'Akila_Buwaneka_Fullstack_Software_Engineer.pdf';
  const filename = decodeURIComponent(lastSegment);
  link.download = filename;

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const viewResume = (resumeUrl: string = '/Akila_Buwaneka_Fullstack_Software_Engineer.pdf'): void => {
  window.open(resumeUrl, '_blank');
};

export const handleResume = (resumeUrl: string = '/Akila_Buwaneka_Fullstack_Software_Engineer.pdf'): void => {
  // If it's an absolute HTTP(s) URL, treat as external
  if (resumeUrl.startsWith('http://') || resumeUrl.startsWith('https://')) {
    // If it's a direct download link (Drive / download param), navigate to it so the browser handles it
    if (resumeUrl.includes('drive.google.com') || resumeUrl.includes('download')) {
      window.location.href = resumeUrl;
    } else {
      // Otherwise open in a new tab (preview)
      viewResume(resumeUrl);
    }
  } else {
    // Local file (served from public/) - trigger download
    downloadResume(resumeUrl);
  }
};
