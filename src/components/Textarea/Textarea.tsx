import React from 'react';
import './Textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      fullWidth = false,
      resize = 'vertical',
      className = '',
      ...props
    },
    ref
  ) => {
    const wrapperClassNames = [
      'soul-textarea',
      error && 'soul-textarea--error',
      fullWidth && 'soul-textarea--full-width',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClassNames}>
        {label && <label className="soul-textarea__label">{label}</label>}
        <textarea
          ref={ref}
          className="soul-textarea__field"
          style={{ resize }}
          {...props}
        />
        {(helperText || errorMessage) && (
          <div className="soul-textarea__helper-text">
            {error && errorMessage ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

