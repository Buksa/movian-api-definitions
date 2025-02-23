# Movian Type Definitions для VSCode

Это руководство объясняет, как настроить определения типов Movian в Visual Studio Code для улучшения подсветки синтаксиса и поддержки IntelliSense.

## Авторы

Код в этом репозитории был вдохновлен и адаптирован из работы в репозитории [movian-plugin-dailymotion](https://github.com/facferreira/movian-plugin-dailymotion/tree/master/src/ts/libs) от facferreira.

## Инструкции по установке

1. **Скачайте определения типов**
   - Клонируйте этот репозиторий или скачайте директорию `libs/movian`

2. **Разместите определения типов в вашем проекте**
   - Скопируйте директорию `libs/movian` в корневую папку вашего проекта

3. **Настройте VSCode**
   - Откройте ваш проект в VSCode
   - Создайте файл `jsconfig.json` в корне проекта с следующим содержимым:

```json
{
    "compilerOptions": {
        "checkJs": true,
        "allowJs": true
    },
    "include": ["**/*.js", "libs/movian/**/*.d.ts"]
}
```

[Остальная часть README остается без изменений...]
