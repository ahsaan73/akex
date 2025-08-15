import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden mb-12">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <Image
        src={post.featuredImage}
        alt={post.title}
        width={1200}
        height={600}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      
      <div className="relative z-10 px-8 py-16 md:px-12 md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 text-blue-100 mb-4">
            <span className="px-3 py-1 bg-blue-500 bg-opacity-50 rounded-full text-sm font-medium">
              Featured Post
            </span>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-white border-opacity-50"
              />
              <div>
                <div className="font-medium text-white">{post.author.name}</div>
                <div className="text-blue-200 text-sm">{post.author.bio}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              Read Article
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}