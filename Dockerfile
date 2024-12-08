# 1. Используем базовый образ с Node.js
FROM node:18 AS builder

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь проект в контейнер
COPY . .

# 6. Сборка Storybook в статические файлы
RUN npm run build-storybook

# 7. Создаем финальный легковесный образ для деплоя
FROM nginx:alpine

# 8. Копируем сгенерированные файлы Storybook в nginx
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# 9. Expose порта для nginx
EXPOSE 80

# 10. Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
