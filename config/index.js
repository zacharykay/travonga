const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://travonga.com';
export const server = dev ? 'http://localhost:3000' : 'https://travonga-api.netlify.app';
export const apiServer = 'https://travonga-api.netlify.app/api';
