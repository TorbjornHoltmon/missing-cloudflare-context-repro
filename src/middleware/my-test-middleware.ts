import { defineMiddleware } from 'astro:middleware';

export const myTestMiddleware = defineMiddleware(async ({ locals, request, cookies, url, routePattern }, next) => {
  if (!locals.runtime?.ctx?.waitUntil) {
    console.log('locals.runtime.ctx?.waitUntil is not defined', {
      routePattern,
      url: url.toString(),
      runtimeKeys: Object.keys(locals.runtime ?? {}),
    });

    return new Response('locals.runtime.ctx?.waitUntil is not defined', {
      status: 500,
      headers: { 'content-type': 'text/plain' },
    });
  }

  const res = await next();

  const body = await res.arrayBuffer();

  return new Response(body, res);
});
