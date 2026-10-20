FROM node:20-alpine
WORKDIR /app
COPY backend/package.json backend/
RUN cd backend && npm install --omit=dev
COPY backend backend
COPY frontend frontend
COPY admin admin
ENV PORT=4000 DATA_DIR=/app/data
EXPOSE 4000
CMD ["node", "backend/src/server.js"]
