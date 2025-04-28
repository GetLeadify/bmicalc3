import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - CalculateBMI</title>
        <meta name="description" content="Privacy policy for the CalculateBMI website. Learn how we protect your data and privacy." />
        <meta name="robots" content="noindex" />
      </Helmet>
    
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="mb-4">Last updated: January 1, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            Welcome to CalculateBMI ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect any information when you use our website, calculatebmi.xyz.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            Our BMI calculator works entirely in your browser. When you use our calculator:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>We do not collect, store, or transmit the height or weight data you enter to any servers.</li>
            <li>Your BMI calculation history is stored only in your local browser storage and remains on your device.</li>
            <li>We do not use this data for any purpose other than providing you with your BMI result.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Analytics and Cookies</h2>
          <p>
            We use standard analytics tools to collect anonymous information about website usage patterns. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Pages visited and time spent on the website</li>
            <li>Referring websites or sources</li>
            <li>Browser type and device information</li>
            <li>Approximate geographic location (country or city level only)</li>
          </ul>
          <p>
            This information helps us improve our website but cannot be used to identify you personally. We use cookies to store these analytics preferences. You can configure your browser to refuse cookies, but this may limit some functionality of the website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            Since we don't collect or store personal health data on our servers, there is minimal risk to your personal information. Your BMI calculation data remains in your browser's local storage, which only you can access through your device.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p>
            Our website may use third-party services for analytics, such as Google Analytics. These services have their own privacy policies governing the use of information they collect.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at privacy@calculatebmi.xyz.
          </p>
        </div>
      </main>
    </>
  );
};

export default Privacy;