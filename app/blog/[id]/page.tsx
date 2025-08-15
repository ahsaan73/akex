import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, User, Tag } from 'lucide-react';
import { blogPosts, mockComments } from '@/lib/blog-data';
import CommentSection from '@/components/blog/CommentSection';
import ShareButtons from '@/components/blog/ShareButtons';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    notFound();
  }

  const postComments = mockComments.filter(comment => comment.postId === post.id);
  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && 
    (p.category.slug === post.category.slug || 
     p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Assuming the current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://blogcms.example.com/blog/${post.id}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900">BlogCMS</span>
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-6">
              <span
                className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full mb-4"
                style={{ backgroundColor: post.category.name === 'Technology' ? '#2563EB' :
                         post.category.name === 'Design' ? '#10B981' :
                         post.category.name === 'Business' ? '#F59E0B' :
                         post.category.name === 'Lifestyle' ? '#EF4444' : '#8B5CF6' }}
              >
                {post.category.name}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-5 w-5" />
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-gray max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex items-center gap-2 mb-8">
            <Tag className="h-5 w-5 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons url={currentUrl} title={post.title} />

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-xl p-6 my-8">
            <div className="flex items-start gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection postId={post.id} comments={postComments} />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <Image
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span
                      className="inline-block px-2 py-1 text-xs font-medium text-white rounded-full mb-2"
                      style={{ backgroundColor: relatedPost.category.name === 'Technology' ? '#2563EB' :
                               relatedPost.category.name === 'Design' ? '#10B981' :
                               relatedPost.category.name === 'Business' ? '#F59E0B' :
                               relatedPost.category.name === 'Lifestyle' ? '#EF4444' : '#8B5CF6' }}
                    >
                      {relatedPost.category.name}
                    </span>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <h4 className="font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}