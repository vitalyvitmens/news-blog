Области хранения данных:

- база данных на json-server
- BFF (посредник между сервером и клиентом)
- редакс стор на клиенте (в нем хранится состояние приложения)

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего пользователя), редакс стор (для отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия текущего пользователя с ролью), редакс стор (использование на клиенте)
- статья: БД (список статей), редакс стор (отображение в браузере)
- комментарий: БД (список комментариев), редакс стор (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content / published_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: id / login / roleId / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
