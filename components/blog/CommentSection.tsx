'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Reply, Send } from 'lucide-react';
import { Comment } from '@/lib/blog-data';

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

export default function CommentSection({ postId, comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentEmail, setNewCommentEmail] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newCommentAuthor.trim() || !newCommentEmail.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      postId,
      author: newCommentAuthor,
      email: newCommentEmail,
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setLocalComments([...localComments, comment]);
    setNewComment('');
    setNewCommentAuthor('');
    setNewCommentEmail('');
  };

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      postId,
      author: 'You', // In a real app, this would come from authentication
      email: 'user@example.com',
      content: replyContent,
      createdAt: new Date().toISOString(),
      parentId,
    };

    const updatedComments = localComments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    });

    setLocalComments(updatedComments);
    setReplyContent('');
    setReplyingTo(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAvatarUrl = (name: string) => {
    // Generate a consistent avatar based on name
    const colors = ['3B82F6', '10B981', 'F59E0B', 'EF4444', '8B5CF6', '06B6D4'];
    const colorIndex = name.length % colors.length;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${colors[colorIndex]}&color=ffffff&size=40`;
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle className="h-6 w-6 text-gray-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          Comments ({localComments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={newCommentAuthor}
            onChange={(e) => setNewCommentAuthor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={newCommentEmail}
            onChange={(e) => setNewCommentEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Send className="h-4 w-4" />
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {localComments.map((comment) => (
          <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Image
                src={getAvatarUrl(comment.author)}
                alt={comment.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-gray-900">{comment.author}</span>
                  <span className="text-gray-500 text-sm">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.content}</p>
                <button
                  onClick={() => setReplyingTo(comment.id)}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <Reply className="h-4 w-4" />
                  Reply
                </button>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <textarea
                      placeholder="Write your reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSubmitReply(comment.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Post Reply
                      </button>
                      <button
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-4 ml-8">
                        <div className="flex items-start gap-3">
                          <Image
                            src={getAvatarUrl(reply.author)}
                            alt={reply.author}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900 text-sm">{reply.author}</span>
                              <span className="text-gray-500 text-xs">{formatDate(reply.createdAt)}</span>
                            </div>
                            <p className="text-gray-700 text-sm">{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}