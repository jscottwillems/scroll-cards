// Define the base Post interface as shown in the requirements
interface Post {
  id: number;
  title: string;
  content: string | null;
}

// Create NewPost type based on Post interface
// Makes id optional while keeping other properties from Post
type NewPost = Omit<Post, 'id'> & {
  id?: number;
}

export type { Post, NewPost }; 