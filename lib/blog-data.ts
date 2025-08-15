export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  readingTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  parentId?: string;
  replies?: Comment[];
}

export const categories = [
  { name: 'Technology', slug: 'technology', color: '#2563EB' },
  { name: 'Design', slug: 'design', color: '#10B981' },
  { name: 'Business', slug: 'business', color: '#F59E0B' },
  { name: 'Lifestyle', slug: 'lifestyle', color: '#EF4444' },
  { name: 'Travel', slug: 'travel', color: '#8B5CF6' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
    content: `
      <p>Web development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging regularly. As we look ahead to 2025, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>1. Server-Side Rendering Renaissance</h2>
      <p>The pendulum is swinging back toward server-side rendering (SSR) with frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge. This approach offers better SEO, faster initial page loads, and improved user experience.</p>
      
      <h2>2. Edge Computing Integration</h2>
      <p>Edge computing is becoming mainstream, allowing developers to run code closer to users for reduced latency and improved performance. Services like Vercel Edge Functions and Cloudflare Workers are making this more accessible.</p>
      
      <h2>3. AI-Powered Development Tools</h2>
      <p>AI assistants are revolutionizing how we write code, debug issues, and optimize performance. Tools like GitHub Copilot and Claude are becoming essential parts of the development workflow.</p>
      
      <h2>4. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, bringing languages like Rust, C++, and Go to web development with near-native performance.</p>
      
      <p>These trends represent just the beginning of what promises to be an exciting year for web development. Staying updated with these technologies will be crucial for developers looking to remain competitive.</p>
    `,
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Senior Full-Stack Developer with 8+ years of experience in modern web technologies.'
    },
    category: { name: 'Technology', slug: 'technology' },
    tags: ['Web Development', 'Frontend', 'Trends', 'JavaScript'],
    featuredImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-15T10:00:00Z',
    readingTime: 5,
    seo: {
      metaTitle: 'Web Development Trends 2025 | Future of Frontend Development',
      metaDescription: 'Discover the top web development trends for 2025, including SSR, edge computing, AI tools, and WebAssembly. Stay ahead in modern web development.',
      keywords: ['web development', 'frontend trends', '2025', 'SSR', 'edge computing', 'AI development']
    }
  },
  {
    id: '2',
    title: 'Mastering Modern CSS: Grid, Flexbox, and Beyond',
    excerpt: 'Deep dive into advanced CSS techniques that will make your layouts more flexible and maintainable.',
    content: `
      <p>CSS has evolved tremendously over the past few years, introducing powerful layout systems that make complex designs achievable with clean, maintainable code.</p>
      
      <h2>CSS Grid: The Layout Revolution</h2>
      <p>CSS Grid provides a two-dimensional layout system that excels at creating complex, responsive designs. Unlike flexbox, which is one-dimensional, Grid allows you to control both rows and columns simultaneously.</p>
      
      <h2>Flexbox: Perfect for Components</h2>
      <p>While Grid handles page-level layouts, Flexbox shines for component-level arrangements. It's ideal for centering content, creating equal-height columns, and distributing space between elements.</p>
      
      <h2>Modern CSS Features</h2>
      <p>New CSS features like Container Queries, CSS Custom Properties (variables), and CSS Logical Properties are changing how we approach responsive design and theming.</p>
      
      <h2>Best Practices</h2>
      <p>Combining these technologies effectively requires understanding when to use each tool. Grid for layout, Flexbox for components, and modern features for enhanced user experiences.</p>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'UI/UX Designer and CSS expert with a passion for beautiful, functional web interfaces.'
    },
    category: { name: 'Design', slug: 'design' },
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive Design'],
    featuredImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-14T14:30:00Z',
    readingTime: 7,
    seo: {
      metaTitle: 'Master Modern CSS: Grid, Flexbox & Advanced Layouts',
      metaDescription: 'Learn advanced CSS techniques including Grid, Flexbox, and modern layout methods. Complete guide to modern CSS for responsive web design.',
      keywords: ['CSS Grid', 'Flexbox', 'CSS layouts', 'responsive design', 'modern CSS']
    }
  },
  {
    id: '3',
    title: 'Building Scalable React Applications: Architecture Patterns',
    excerpt: 'Learn proven patterns and practices for structuring large-scale React applications that stand the test of time.',
    content: `
      <p>As React applications grow in complexity, having a solid architecture becomes crucial for maintainability, scalability, and team collaboration.</p>
      
      <h2>Component Architecture</h2>
      <p>Organize your components using atomic design principles: atoms, molecules, organisms, templates, and pages. This hierarchy helps maintain consistency and reusability.</p>
      
      <h2>State Management Strategies</h2>
      <p>Choose the right state management solution for your needs. Local state with useState, global state with Context API, or dedicated libraries like Redux or Zustand for complex applications.</p>
      
      <h2>Code Organization</h2>
      <p>Structure your project with feature-based folders, separate concerns clearly, and maintain consistent naming conventions across your codebase.</p>
      
      <h2>Performance Optimization</h2>
      <p>Implement React.memo, useMemo, and useCallback judiciously. Use React.lazy for code splitting and Suspense for better user experience during loading states.</p>
    `,
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'React architect and technical lead with experience building applications for Fortune 500 companies.'
    },
    category: { name: 'Technology', slug: 'technology' },
    tags: ['React', 'Architecture', 'Scalability', 'Best Practices'],
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-13T09:15:00Z',
    readingTime: 8,
    seo: {
      metaTitle: 'React Architecture Patterns: Building Scalable Applications',
      metaDescription: 'Master React architecture patterns for scalable applications. Learn component organization, state management, and performance optimization techniques.',
      keywords: ['React architecture', 'scalable React', 'React patterns', 'component architecture', 'React best practices']
    }
  },
  {
    id: '4',
    title: 'The Art of Minimalist Design: Less is More',
    excerpt: 'Discover how minimalist design principles can create more impactful and user-friendly digital experiences.',
    content: `
      <p>Minimalist design isn't just about removing elements—it's about intentional design choices that enhance user experience through simplicity and clarity.</p>
      
      <h2>Core Principles</h2>
      <p>Focus on essential elements, embrace white space, use a limited color palette, and maintain consistent typography throughout your design.</p>
      
      <h2>Benefits of Minimalism</h2>
      <p>Faster loading times, improved usability, better mobile experience, and reduced cognitive load for users navigating your interface.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Start with user needs, remove unnecessary elements, use hierarchy effectively, and test with real users to ensure functionality isn't compromised.</p>
    `,
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director specializing in minimalist design and user experience optimization.'
    },
    category: { name: 'Design', slug: 'design' },
    tags: ['Minimalism', 'UI Design', 'User Experience', 'Design Principles'],
    featuredImage: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-12T16:45:00Z',
    readingTime: 6,
    seo: {
      metaTitle: 'Minimalist Design Principles: Less is More in UI/UX',
      metaDescription: 'Learn minimalist design principles for better user experience. Discover how simplicity and clarity improve digital interfaces.',
      keywords: ['minimalist design', 'UI principles', 'simple design', 'user experience', 'design philosophy']
    }
  },
  {
    id: '5',
    title: 'Remote Work Success: Building Effective Digital Teams',
    excerpt: 'Strategies for managing and thriving in remote work environments, from communication to productivity.',
    content: `
      <p>Remote work has become the new normal for many organizations. Success requires intentional strategies for communication, collaboration, and culture building.</p>
      
      <h2>Communication Excellence</h2>
      <p>Establish clear communication protocols, use appropriate tools for different types of interactions, and maintain regular check-ins with team members.</p>
      
      <h2>Productivity Systems</h2>
      <p>Create dedicated workspaces, maintain boundaries between work and personal life, and use productivity techniques that work for distributed teams.</p>
      
      <h2>Team Culture</h2>
      <p>Foster connection through virtual team building, celebrate achievements, and create opportunities for informal interactions among team members.</p>
    `,
    author: {
      name: 'David Park',
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Remote work consultant and team productivity specialist with 10+ years of distributed team experience.'
    },
    category: { name: 'Business', slug: 'business' },
    tags: ['Remote Work', 'Team Management', 'Productivity', 'Digital Teams'],
    featuredImage: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-11T11:20:00Z',
    readingTime: 5,
    seo: {
      metaTitle: 'Remote Work Success: Building Effective Digital Teams',
      metaDescription: 'Master remote work strategies for digital teams. Learn communication, productivity, and culture-building techniques for distributed work.',
      keywords: ['remote work', 'digital teams', 'remote management', 'distributed teams', 'work from home']
    }
  },
  {
    id: '6',
    title: 'Sustainable Travel: Exploring the World Responsibly',
    excerpt: 'How to travel sustainably while still having amazing experiences and supporting local communities.',
    content: `
      <p>Sustainable travel is about making conscious choices that minimize environmental impact while maximizing positive contributions to local communities.</p>
      
      <h2>Transportation Choices</h2>
      <p>Consider train travel over flights when possible, choose direct flights to reduce emissions, and use public transportation or walk at your destination.</p>
      
      <h2>Accommodation Impact</h2>
      <p>Stay in eco-certified hotels, support locally-owned accommodations, and practice water and energy conservation during your stay.</p>
      
      <h2>Supporting Communities</h2>
      <p>Buy from local businesses, respect cultural norms and traditions, and choose tour operators that benefit local communities.</p>
    `,
    author: {
      name: 'Lisa Chang',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sustainable travel advocate and environmental journalist covering responsible tourism practices.'
    },
    category: { name: 'Travel', slug: 'travel' },
    tags: ['Sustainable Travel', 'Eco Tourism', 'Responsible Travel', 'Environment'],
    featuredImage: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-12-10T13:30:00Z',
    readingTime: 4,
    seo: {
      metaTitle: 'Sustainable Travel Guide: How to Travel Responsibly',
      metaDescription: 'Learn sustainable travel practices that protect the environment and support local communities. Complete guide to responsible tourism.',
      keywords: ['sustainable travel', 'eco tourism', 'responsible travel', 'green travel', 'ethical tourism']
    }
  }
];

// Mock comments data
export const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    author: 'John Doe',
    email: 'john@example.com',
    content: 'Great insights! I\'m particularly excited about the WebAssembly trend. Do you think it will eventually replace JavaScript for performance-critical applications?',
    createdAt: '2024-12-15T12:30:00Z',
    replies: [
      {
        id: '2',
        postId: '1',
        author: 'Alex Rodriguez',
        email: 'alex@example.com',
        content: 'Thanks John! I think WASM will complement JavaScript rather than replace it. JS will remain the primary language for most web development, while WASM will handle compute-intensive tasks.',
        createdAt: '2024-12-15T14:15:00Z',
        parentId: '1'
      }
    ]
  },
  {
    id: '3',
    postId: '1',
    author: 'Maria Garcia',
    email: 'maria@example.com',
    content: 'Edge computing is definitely game-changing. We\'ve seen 40% improvement in our app performance since moving some logic to edge functions.',
    createdAt: '2024-12-15T16:45:00Z'
  },
  {
    id: '4',
    postId: '2',
    author: 'Tom Smith',
    email: 'tom@example.com',
    content: 'CSS Grid has revolutionized my workflow. The combination of Grid and Flexbox makes any layout possible without hacky workarounds.',
    createdAt: '2024-12-14T18:20:00Z'
  }
];