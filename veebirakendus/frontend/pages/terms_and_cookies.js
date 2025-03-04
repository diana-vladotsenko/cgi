import Head from "next/head";
import Link from "next/link";

export default function termsAndCookies() {
  return (
    <>
      <Head>
        <title>CutyeStickers - Terms & Cookies</title>
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
                color: "#BDBDBD",
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
                color: "646464",
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

        <h2>Terms & Cookies Policy</h2>
        <hr />
        <p>
          <strong>Effective Date:</strong> February 28, 2025
        </p>

        <h3>1. Terms of Use</h3>
        <p>
          By using <strong>CutyeStickers</strong> (&quot;Company,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
          these Terms of Use. Please read them carefully before using our
          website.
        </p>

        <h4>1.1 Use of Our Services</h4>
        <p>
          You may use our website and products only for lawful purposes.
          Unauthorized resale, redistribution, or reproduction of our digital
          products is strictly prohibited.
        </p>

        <h4>1.2 Intellectual Property</h4>
        <p>
          All content, including images, text, and branding, is owned by
          CutyeStickers and is protected by copyright and intellectual property
          laws.
        </p>

        <h3>2. Cookies Policy</h3>
        <p>
          We use cookies to enhance your browsing experience. By continuing to
          use our website, you consent to our use of cookies.
        </p>

        <h4>2.1 What Are Cookies?</h4>
        <p>
          Cookies are small text files stored on your device when you visit our
          website. They help us understand user behavior and improve website
          functionality.
        </p>

        <h4>2.2 How We Use Cookies</h4>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Necessary for website
            functionality.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us analyze site traffic and
            user interactions.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used for personalized ads and
            promotions.
          </li>
        </ul>

        <h4>2.3 Managing Cookies</h4>
        <p>
          You can manage cookie preferences in your browser settings. Note that
          disabling cookies may affect website functionality.
        </p>

        <h3>3. Limitation of Liability</h3>
        <p>
          We are not responsible for any damages or losses resulting from the
          use of our website or products. Use at your own risk.
        </p>

        <h3>4. Changes to These Terms</h3>
        <p>
          We may update this policy periodically. Any changes will be posted
          with an updated effective date.
        </p>

        <h3>5. Contact Information</h3>
        <p>
          For any questions, please contact us at:
          <a href="mailto:cutyestickers@gmail.com">cutyestickers@gmail.com</a>
        </p>

        <p>
          <strong>
            By using our website, you acknowledge that you have read and agreed
            to these Terms & Cookies Policy.
          </strong>
        </p>
      </div>
    </>
  );
}
