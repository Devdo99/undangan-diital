import { useState } from 'react';

const copyWithFallback = (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

export const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        copyWithFallback(text);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      copyWithFallback(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return { copied, copy };
};
