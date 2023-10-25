FROM node:20-alpine
RUN corepack enable && corepack prepare --activate pnpm@latest