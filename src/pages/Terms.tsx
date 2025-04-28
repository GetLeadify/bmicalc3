import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - CalculateBMI</title>
        <meta name="description" content="Terms of service for the CalculateBMI website. Read our terms and conditions of use." />
        <meta name="robots" content="noindex" />
      </Helmet>
    
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="mb-4">Last updated: January 1, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            Welcome to CalculateBMI. These Terms of Service govern your use of our website located at calculatebmi.xyz. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Use of Our Services</h2>
          <p>
            CalculateBMI provides a Body Mass Index (BMI) calculator for informational purposes only. Our services are subject to the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>The BMI calculator is provided "as is" without any warranties, expressed or implied.</li>
            <li>Results from our calculator are intended for informational purposes only and should not be considered medical advice.</li>
            <li>You should consult with a healthcare professional for proper medical advice and before making any health-related decisions.</li>
            <li>You use our services at your own risk and discretion.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Medical Disclaimer</h2>
          <p>
            The BMI calculator and related information provided on CalculateBMI are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="mt-2">
            Never disregard professional medical advice or delay seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, and other matters related to the CalculateBMI website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistributing, use, or publication by you of any such content or any part of the website is prohibited without express written permission from us.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            Under no circumstances shall CalculateBMI or its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the services or content provided on this website. This limitation applies even if we have been advised of the possibility of such damages.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites that are not owned or controlled by CalculateBMI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and conditions and privacy policy of any third-party website that you visit.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
          <p>
            We reserve the right to modify these terms of service at any time. We will notify users of any changes by updating the "Last updated" date at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at terms@calculatebmi.xyz.
          </p>
        </div>
      </main>
    </>
  );
};

export default Terms;