##Разработка микросервисов

###Установка 

Необходимо чтобы на машине был установлен nodejs и npm

Забрать проект 
```git
git clone git@github.com:benderr/qa.tests.git
```
Установка зависимостей 
```js
npm install
```

Запуск всех тестов (сгенерированный отчет сохраняется в папке /test/report/mochawesome.html)
```js
npm run testall
```
Пример запуска http-сервера для микросервиса генерации снилса
```js
node ./snils.microservice/app.js
```
Пример запуска тестов для микросервиса генерации снилса
```js
npm test ./test/snils.spec.js
```


Более подробная информация по запуску http-сервера для микросервиса и запуска теста по нему описана в документации в Wiki https://github.com/benderr/qa.tests/wiki/Documentation


