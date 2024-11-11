import React from "react";

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      Verification code: <h2>{code}</h2>
    </p>

    <p>
      <a
        href={`https://hermes-group-kappa.vercel.app/api/auth/verify?code=${code}`}
      >
        Confirm registration
      </a>
    </p>
  </div>
);
