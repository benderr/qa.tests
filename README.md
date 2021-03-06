##Разработка микросервисов

###Установка 

Необходимо чтобы на машине был установлен nodejs и npm

Забрать проект 
```git
git clone git@github.com:benderr/qa.tests.git
или
git clone https://github.com/benderr/qa.tests.git
```
Установка зависимостей 
```js
npm install
```

###Запуск

Запуск всех тестов (сгенерированный отчет сохраняется в папке /test/report/mochawesome.html)
```js
npm run testall
```
Пример запуска http-сервера для микросервиса генерации снилса

Пример работы можно увидеть тут http://localhost:3003/getdata (порт для каждого микросервиса конфигурируется в папке самого микросервиса)
```js
node ./snils.microservice/app.js
```
Пример запуска тестов для микросервиса генерации снилса (отчет будет сохранен в папке /mochawesome-reports/mochawesome.html)
```js
npm test ./test/snils.spec.js
```

###Структура микросервиса

В папке содержатся следующие файлы

*app.js* - приложение, которое запускается при старте http-сервера

*config.js* - конфиг приложения, здесь указывается только порт, но в перспективе можно добавить еще какие-то данные

*routes.js* - роуты приложения по которым принимаются http-запросы

*_utility.js* - бизнес-логика микросервиса, которая как правило содержит функцию генерации и функцию валидации


Также имеется папка со словарями - *dict*, папка тестов - *test* и вспомогательные утилиты в - *core*

###Документация

Более подробная информация по запуску http-сервера для микросервиса и запуска теста по нему описана в документации в Wiki https://github.com/benderr/qa.tests/wiki/Documentation


