import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function Google() {
  return (
    <GoogleOAuthProvider clientId="723498648129-2d0ml6f4ilas4nf7st663mtrublgsau3.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default Google;
