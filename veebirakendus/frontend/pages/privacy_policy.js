import Head from "next/head";
import Link from "next/link";

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>CutyeStickers</title>
      </Head>
      <div class="privacy-policy">
        <div className="navigation-container">
          <Link
            href="/"
            style={{
              marginRight: "auto",
              color: "646464",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Go Home
          </Link>
          <div className="privacy-terms-container">
            <Link
              className="link"
              href="/privacy_policy"
              style={{
                color: "646464",
                textDecoration: "none",
                fontSize: "22px",
                marginLeft: "80px",
                marginRight: "80px",
              }}
            >
              01 - Privacy Policy
            </Link>
            <img src="/images/Vector83.png" alt="vector" />
            <Link
              className="link"
              href="/terms_and_cookies"
              style={{
                color: "#BDBDBD",
                textDecoration: "none",
                fontSize: "22px",
                marginLeft: "80px",
                marginRight: "80px",
              }}
            >
              02 - Terms & Cookies
            </Link>
          </div>
        </div>

        <h2>Privacy Policy</h2>
        <hr />
        <p>
          <strong>Effective Date:</strong> February 28, 2025
        </p>

        <p>
          <strong>CutyeStickers</strong> (&quot;Company,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website. By using
          our website, you agree to the terms outlined in this policy.
        </p>

        <h3>1. Information We Collect</h3>
        <h4>1.1 Personal Information</h4>
        <p>
          We collect personal information that you voluntarily provide when you:
        </p>
        <ul>
          <li>Place an order.</li>
          <li>Subscribe to our newsletter.</li>
          <li>Contact us for support or inquiries.</li>
        </ul>
        <p>
          This may include your name, email address, billing details, and
          payment information (processed securely by third-party providers).
        </p>

        <h4>1.2 Automatically Collected Information</h4>
        <p>
          We may automatically collect information when you visit our website,
          such as:
        </p>
        <ul>
          <li>
            <strong>Device Information:</strong> IP address, browser type, and
            operating system.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages viewed, time spent on the
            website, and interactions with content.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> Small data files to enhance
            user experience and analyze site performance.
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We process your data for the following purposes:</p>
        <ul>
          <li>
            <strong>Order Fulfillment:</strong> Processing transactions,
            delivering products, and customer support.
          </li>
          <li>
            <strong>Website Improvement:</strong> Analyzing site performance to
            enhance user experience.
          </li>
          <li>
            <strong>Marketing & Communications:</strong> Sending promotional
            emails (you may opt out at any time).
          </li>
          <li>
            <strong>Legal & Security:</strong> Preventing fraud and ensuring
            compliance with legal obligations.
          </li>
        </ul>

        <h3>3. Data Sharing & Disclosure</h3>
        <p>
          We do not sell or rent your personal data. However, we may share
          information with:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Payment processors, email
            delivery services, and website hosts.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law to protect our
            rights or customers&quot; security.
          </li>
        </ul>

        <h3>4. Cookies & Tracking Technologies</h3>
        <p>
          Our website uses cookies for functionality and analytics. You may
          manage cookie settings in your browser.
        </p>

        <h3>5. Your Rights & Choices</h3>
        <p>You may have the right to:</p>
        <ul>
          <li>
            <strong>Access & Correct Your Data:</strong> Request access to your
            personal information.
          </li>
          <li>
            <strong>Data Deletion:</strong> Request removal of your personal
            data.
          </li>
          <li>
            <strong>Marketing Preferences:</strong> Unsubscribe from marketing
            emails at any time.
          </li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:cutyestickers@gmail.com">cutyestickers@gmail.com</a>.
        </p>

        <h3>6. Data Security</h3>
        <p>
          We implement security measures to protect your data, but no method is
          100% secure. Please use strong passwords and protect your account.
        </p>

        <h3>7. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party platforms (e.g., Etsy,
          Instagram, TikTok). We are not responsible for their privacy
          practices.
        </p>

        <h3>8. Changes to This Privacy Policy</h3>
        <p>
          We may update this policy from time to time. Changes will be posted
          with an updated effective date.
        </p>

        <h3>9. Contact Information</h3>
        <p>
          For any questions regarding this Privacy Policy, please contact us at:
        </p>
        <p>
          📧{" "}
          <a href="mailto:cutyestickers@gmail.com">cutyestickers@gmail.com</a>
        </p>

        <p>
          <strong>
            By using our website, you acknowledge that you have read and agreed
            to this Privacy Policy.
          </strong>
        </p>
      </div>
    </>
  );
}
