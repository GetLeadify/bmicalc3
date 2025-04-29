import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  // Sort posts by date, most recent first
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Helmet>
        <title>BMI Health Blog - Expert Articles About Body Mass Index</title>
        <meta name="description" content="Read expert articles about BMI, weight management, and health. Learn how to calculate and interpret your Body Mass Index for better health outcomes." />
      </Helmet>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">BMI Health Blog</h1>
          <p className="text-gray-600">
            Expert articles and guides about Body Mass Index, weight management, and health
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {sortedPosts.length} articles to help you understand and manage your BMI
          </p>
        </div>
        
        <div className="grid gap-8">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Link to={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600">Read more →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;