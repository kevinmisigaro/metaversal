export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    image: string;
    address: {
      street: string;
      city: string;
      state: string;
      stateCode: string;
      zip: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    },
    company: {
      department: string;
      name: string;
      title: string;
      address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        country: string;
      };
    };
  }
  

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number
  user: User;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}