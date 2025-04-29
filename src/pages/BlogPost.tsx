import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - CalculateBMI</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={`${post.title} - CalculateBMI`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://calculatebmi.xyz/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-blue max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 mb-8 p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg text-center">
            <h3 className="text-white text-2xl font-bold mb-4">Ready to Calculate Your BMI?</h3>
            <Link 
              to="/#"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
            >
              <Calculator className="w-6 h-6 mr-2" />
              Try Our Free BMI Calculator
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;