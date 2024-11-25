import React from 'react';
import '../styles/LandingPage.css'; // Importing the associated CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-container"> {/* Container styled in CSS */}
      <div className="logo-container"> {/* Logo section */}
        <img src="/logo.png" alt="Sandeep Flix Logo" className="logo" /> {/* Logo image */}
      </div>
      <div className="signin-form"> {/* Sign-in form section */}
        <h1 className="form-title">Sign In</h1> {/* Title */}
        <button className="sign-in-btn">Sign In</button> {/* Sign-in button */}
        <div className="additional-options">
          <span className="forgot-password">Forgot Password?</span> {/* Forgot password link */}
        </div>
        <div className="signup-link"> {/* Sign-up link */}
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


// import React from "react";
// import "../styles/LandingPage.css"; // Import CSS for styling

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       {/* Logo */}
//       <div className="logo-container">
//         <img src="/logo.png" alt="Sandeep Flix Logo" className="logo" />
//       </div>

//       {/* Sign-In Form */}
//       <div className="signin-form">
//         <h2 className="form-title">Sign In</h2>
//         <input
//           type="text"
//           placeholder="Email or mobile number"
//           className="input-field"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="input-field"
//         />
//         <button className="sign-in-btn">Sign In</button>
//         <p className="forgot-password">Forgot password?</p>
//         <p className="signup-link">
//           New to Sandeep Flix? <a href="#signup">Sign up now.</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
