/* eslint-disable no-use-before-define */
import { BadgeProps } from '../components/Badge';

export interface DataItem {
  login: string;
  title: string;
  description: string;
}

export interface Data {
  data: DataItem[];
}

export type List = Partial<DataItem> & { name: string };

// Tree-Shaking : 사용하지 않는 코드를 삭제하는 기능
/*
enum STATE {
  OPEN = 'open',
  CLOSE = 'colse',
}
*/

// Union Types
const STATE = {
  OPEN: 'open',
  CLOSE: 'close',
} as const;

type STATE = typeof STATE[keyof typeof STATE];

export interface ListItem {
  id: string;
  labels?: BadgeProps[];
  state: STATE;
  created_at: string;
  closed_at: string;
  title: string;
  number: number;
  user: { login : string }
}
