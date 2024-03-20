import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";;
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        <a
          className="ss"
          href="https://www.linkedin.com/in/shanu-sarkar01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={styles.icon} />
        </a>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FShanu0156"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={styles.icon} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail style={styles.icon} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp style={styles.icon} />
        </a>
      </div>
      <p style={styles.copywrite}>
        © 2024 Your Company Name. All Rights Reserved. Made with ❤️ by Shanu
        Sarkar
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "white",
    color: "black",
    fontSize: "22px",
    textAlign: "center",
    padding: "0 0 1px 0"
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "30px",
    margin: "25px 15px",
    color: "black",
  },
  copywrite: {
    fontSize: "15px",
    margin: "10px",
  },
};

export default Footer;





// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.socialIcons}>
//         <a
//           href="https://www.facebook.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaFacebook style={styles.icon} />
//         </a>
//         <a
//           href="https://twitter.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaTwitter style={styles.icon} />
//         </a>
//         <a
//           href="https://www.linkedin.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin style={styles.icon} />
//         </a>
//         <a
//           href="https://www.instagram.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram style={styles.icon} />
//         </a>
//       </div>
//       <p style={styles.copywrite}>
//         © 2024 Your Company Name. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "20px",
//     textAlign: "center",
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 9999, // Set a high z-index to ensure the footer appears above other content
//   },
//   socialIcons: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   },
//   icon: {
//     fontSize: "24px",
//     margin: "0 10px",
//     color: "#fff",
//   },
//   copywrite: {
//     fontSize: "14px",
//     margin: 0,
//   },
// };

// export default Footer;
