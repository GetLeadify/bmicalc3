const SEOInfo: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Body Mass Index (BMI)</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What is BMI?</h3>
          <p className="text-gray-700 leading-relaxed">
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared. A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">BMI Categories</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            BMI is divided into the following categories that indicate different levels of health risk:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><span className="font-medium text-orange-600">Severe Thinness</span>: BMI less than 16</li>
            <li><span className="font-medium text-yellow-600">Moderate Thinness</span>: BMI between 16 and 17</li>
            <li><span className="font-medium text-yellow-500">Mild Thinness</span>: BMI between 17 and 18.5</li>
            <li><span className="font-medium text-green-600">Normal</span>: BMI between 18.5 and 25</li>
            <li><span className="font-medium text-yellow-500">Overweight</span>: BMI between 25 and 30</li>
            <li><span className="font-medium text-orange-500">Obese Class I</span>: BMI between 30 and 35</li>
            <li><span className="font-medium text-orange-600">Obese Class II</span>: BMI between 35 and 40</li>
            <li><span className="font-medium text-red-600">Obese Class III</span>: BMI over 40</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Calculate BMI</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are two formulas for calculating BMI depending on the measurement system you use:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-3 mb-4">
            <p className="font-medium text-gray-800">Metric Formula:</p>
            <p className="text-gray-700">BMI = weight(kg) / height²(m)</p>
            <p className="text-sm text-gray-600">Example: A person weighing 70 kg and height 175 cm (1.75 m) has a BMI of 22.9.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <p className="font-medium text-gray-800">Imperial Formula:</p>
            <p className="text-gray-700">BMI = 703 × weight(lb) / height²(in)</p>
            <p className="text-sm text-gray-600">Example: A person weighing 160 pounds and height 5'7" (67 inches) has a BMI of 25.1.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitations of BMI</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While BMI is a useful measure for most people, it does have some limitations:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>BMI may overestimate body fat in athletes and others with muscular builds.</li>
            <li>BMI may underestimate body fat in older persons and others who have lost muscle mass.</li>
            <li>BMI doesn't account for factors like muscle mass, bone density, overall body composition, or ethnic and gender differences.</li>
            <li>BMI is not appropriate for pregnant or breastfeeding women, children, or the elderly.</li>
          </ul>
          
          <p className="text-gray-700 leading-relaxed">
            Because of these limitations, BMI should be considered as one of several tools for assessing weight and health risks, not as a diagnostic tool on its own. For a more comprehensive health assessment, consult with a healthcare provider.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Health Implications of BMI</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Research has shown that as BMI increases, so does the risk for some diseases and health conditions, including:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>High blood pressure (Hypertension)</li>
            <li>Type 2 diabetes</li>
            <li>Coronary heart disease</li>
            <li>Stroke</li>
            <li>Gallbladder disease</li>
            <li>Osteoarthritis</li>
            <li>Sleep apnea and breathing problems</li>
            <li>Certain types of cancer</li>
            <li>Mental health issues such as depression and anxiety</li>
            <li>Overall mortality (death rate)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Using BMI Effectively</h3>
          <p className="text-gray-700 leading-relaxed">
            For the most accurate health assessment, use BMI in conjunction with other measures like waist circumference, assessment of diet and physical activity levels, family history, and other health screenings. Regular BMI monitoring can help track weight changes over time and motivate healthy lifestyle choices. Remember that small, sustainable changes in diet and physical activity can lead to significant health improvements, regardless of whether they result in weight loss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOInfo;