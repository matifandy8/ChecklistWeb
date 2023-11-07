import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome! {firstName}</h1>
    <p>
      Thanks for joining ChecklistWeb waitlist! Get ready to revolutionize your project management. Stay tuned for early access and exciting updates. Cheers, The ChecklistWeb Team
    </p>
    <p>Best regards,</p>
    <p>The ChecklistWeb Team</p>
  </div>
);
