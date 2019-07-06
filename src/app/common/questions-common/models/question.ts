import {Owner} from './owner';

export interface Question {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  bounty_amount: number;
  bounty_closes_date: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  link: string;
  title: string;
}
