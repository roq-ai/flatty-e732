import { CategoryInterface } from 'interfaces/category';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  category_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  category?: CategoryInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  category_id?: string;
  user_id?: string;
}
