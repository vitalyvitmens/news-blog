1. npx create-react-app frontend
2. cd frontend
3. npm start
4. Ctrl + C (останавливаем приложение)
5. npm i eslint-config-prettier eslint-plugin-prettier prettier
6. в файл package.json в поле eslintConfig добавляем:

- ,
  "prettier"
  ],
  "plugins": [
  "prettier"

7. В корне проекта frontend создаём файл .prettierrc.json со следующим содержимым:

- {
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": true,
  "semi": false,
  "singleQuote": true
  }

8. Что бы синхронизировать файл .editorconfig с Вашим редактором кода установи одноименное расширение editorconfig
9. npm start
