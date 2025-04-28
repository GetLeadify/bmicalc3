import { Helmet } from 'react-helmet-async';
import BMICalculator from '../components/BMICalculator';
import BMIHistory from '../components/BMIHistory';
import SEOInfo from '../components/SEOInfo';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CalculateBMI - Free Online BMI Calculator</title>
        <meta name="description" content="Calculate your Body Mass Index (BMI) with our free, easy-to-use online calculator. Get instant results and personalized health insights." />
        <meta name="keywords" content="BMI calculator, body mass index, weight calculator, health calculator, BMI calculation, healthy weight range" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calculatebmi.xyz/" />
        <meta property="og:title" content="CalculateBMI - Free Online BMI Calculator" />
        <meta property="og:description" content="Calculate your Body Mass Index (BMI) with our free, easy-to-use online calculator. Get instant results and personalized health insights." />
        <meta property="og:image" content="https://calculatebmi.xyz/bmi-calculator-preview.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://calculatebmi.xyz/" />
        <meta property="twitter:title" content="CalculateBMI - Free Online BMI Calculator" />
        <meta property="twitter:description" content="Calculate your Body Mass Index (BMI) with our free, easy-to-use online calculator. Get instant results and personalized health insights." />
        <meta property="twitter:image" content="https://calculatebmi.xyz/bmi-calculator-preview.jpg" />
      </Helmet>
      
      <main>
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Body Mass Index
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Use our free BMI calculator to check if you're at a healthy weight. Get instant results and personalized insights.
              </p>
            </div>
            
            <BMICalculator />
            <BMIHistory />
          </div>
        </section>
        
        <SEOInfo />
      </main>
    </>
  );
};

export default Home;