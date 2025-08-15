import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <Image
          src={post.featuredImage}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-xs font-medium text-white rounded-full"
            style={{ backgroundColor: post.category.name === 'Technology' ? '#2563EB' :
                     post.category.name === 'Design' ? '#10B981' :
                     post.category.name === 'Business' ? '#F59E0B' :
                     post.category.name === 'Lifestyle' ? '#EF4444' : '#8B5CF6' }}
          >
            {post.category.name}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${post.id}`} className="group">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">{post.tags.length} tags</span>
          </div>
        </div>
      </div>
    </article>
  );
}