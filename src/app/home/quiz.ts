import { Question } from './question';

export interface Quiz {
    title: String,
    description: String,
    slug: String,
    questions?: [Question]
}
