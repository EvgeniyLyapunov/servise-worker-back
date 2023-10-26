# Fish-News-Api

### Небольшое сервис-API. Принимает запрос по: url https://fish-news-api.onrender.com/3 
### /3 - количество объектов в ответе

#### формат ответа:

```js
  {
    "id": "49595ad1-6d56-4a4e-aade-07c929b9905a",
    "date": 1698332626968,
    "text": "Adsuesco ante aqua. Animadverto curo certe error thymbra. Abscido excepturi paulatim universe toties conatus laborum vitium tristis sponte. Valeo similique reprehenderit dolor caveo acsi caritas apto excepturi vindico.",
    "image": "https://avatars.githubusercontent.com/u/49948326"
  },
```
Сервис расположен на render.com на бесплатном тарифе, поэтому первый запрос вернётся примерно через минуту.
Следующие запросы будут возвращаться с задержкой от 0 до 5 секунд.
