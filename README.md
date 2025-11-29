<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка деплоя:

1. **Создайте репозиторий на GitHub** (если ещё не создан)
2. **Включите GitHub Pages** в настройках репозитория:
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
3. **Добавьте секреты** (если используете GEMINI_API_KEY):
   - Перейдите в Settings → Secrets and variables → Actions
   - Добавьте секрет `GEMINI_API_KEY` с вашим API ключом
4. **Запушьте код в ветку `main`**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

После этого GitHub Actions автоматически соберёт и задеплоит проект. Сайт будет доступен по адресу:
`https://<ваш-username>.github.io/<имя-репозитория>/`
