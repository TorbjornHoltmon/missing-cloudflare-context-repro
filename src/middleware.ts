import { sequence } from 'astro:middleware';
import { myTestMiddleware } from './middleware/my-test-middleware';

export const onRequest = sequence(myTestMiddleware);
