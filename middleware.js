import { NextResponse } from 'next/server';

// Necessary code so that HTTP requests can work properly in a Next.js environment
export function middleware(request) {
  const origin = request.headers.get('Origin');
  console.log(origin);

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  console.log('Middleware!');
  console.log(request.method);
  console.log(request.url);

  return response;
}
