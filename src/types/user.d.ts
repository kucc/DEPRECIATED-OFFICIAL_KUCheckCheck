interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: 'MEMBER' | 'ADMIN';
  emoji?: string;
  comment: string;
  detailComment?: string;
  githubId?: string;
  instagramId?: string;
  createdAt: string;
  updatedAt: string;
}
