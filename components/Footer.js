import Image from "next/image";

import footerStyles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span className={footerStyles.logo}>
          <Image
            src="/footer_image.svg"
            alt="NFTFolio Logo"
            width={80}
            height={20}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
