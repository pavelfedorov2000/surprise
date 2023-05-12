# Surprise
Магазин подарочных сертификатов
http://pavfed.com/surprise/

<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/052727bc-33d2-4a19-93a6-37243776aa44" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/8435ae2e-d686-4cbd-bce8-91e2523c0262" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/1ce923b8-d779-4b24-af14-1d64382d56ae" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/ab616f64-2f0a-4675-be35-0a7b5d45d4c2" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/bed5953b-958c-4639-a920-59897505fed8" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/c7552883-208a-49c7-87cf-54e9c97661b5" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/aa6687bf-8635-404b-9096-45afd554fccd" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/f336dae6-94b8-44f6-b78f-c59a446d401e" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/a37a3d91-b00a-4873-8c55-204a1332de5a" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/f0b0cf4b-4401-42c3-8f82-a1fe8fe86135" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/22da71f1-4d10-4e17-942c-e3f2e8ae31e5" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/34f3564a-c04c-4662-8383-14be6c4f21c7" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/f460f226-b598-496e-bfe6-d3c8fc00132e" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/81218f93-2da0-47b5-a1ce-8cbc8d2bb25b" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/37f23b27-5f12-4e45-9e04-862fcf4238bb" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/11797a5d-7712-4fb3-9800-3108f63bd5ee" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/610a6299-151a-4144-8abb-c57ee0bccf73" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/1129cc8c-a4e1-4a1b-924b-53f8d17ac37d" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/c1bbf3a0-3847-43ec-85e8-2adc12206f12" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/c4c1bcce-a184-43b3-b96f-87897921ec93" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/200ca64b-8629-4b25-bce6-3a1d48bdbda4" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/f1afc2c7-777c-4539-a4fc-dd647d82140d" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/27a70930-68ad-4d9e-83e1-ad94a602e8ab" />
<img src="https://github.com/pavelfedorov2000/surprise/assets/66357864/6f9c92a3-ffbf-48c5-838e-0d1481daad9f" />

## Структура папок и файлов
```
├── app/                              # Исходники
│   ├── blocks/                       # Блоки
│   │   ├── block/                    # Блок
│   │   │    ├── block.html           # Разметка блока
│   │   │    ├── block.js             # Скрипт блока
│   │   │    └── block.scss           # Стили блока
│   │   ├── footer/                   # Футер сайта
│   │   │    ├── footer.html          # Начальная разметка футера сайта
│   │   │    └── footer.scss          # Начальные стили футера сайта
│   │   ├── head/                     # Секция head
│   │   │    └── head.html            # Разметка секции head и открывающие тэги документа
│   │   ├── header/                   # Шапка сайта
│   │   │    ├── header.html          # Начальная разметка шапки сайта
│   │   │    └── header.scss          # Начальные стили шапки сайта
│   │   └── link/                     # Подключение скриптов
│   │        └── link.html            # Разметка с подключаемыми скриптами и закрывающе тэги документа
│   ├── data/                         # Данные в формате JSON
│   ├── images/                       # Изображения
│   │   └── sprite-icons /            # SVG иконки для генерации векторного спрайта
│   ├── pages/                        # Страницы
│   │   └── index.html                # Разметка страницы
│   ├── resources/                    # Статические файлы для копирования в dist
│   ├── scripts/                      # Скрипты
│   │   ├── common/                   # Вспомогательные функции проекта
│   │   │   └── addLibs.js            # Файл содержащий методы для динамического добавления библиотек
│   │   ├── app.js                    # Главный скрипт
│   │   └── init.js                   # Подключение модулей проекта
│   └── styles/                       # Стили
│       ├── common/                   # Общие стили
│       │   └── common.scss           # Общие стили сайта
│       ├── helpers/                  # Помощники
│       │   ├── fonts.scss            # Подключение шрифтов
│       │   ├── mixins.scss           # Примеси
│       │   ├── nojs.scss             # Сообщение об отключенном js
│       │   ├── optimize.scss         # Сброс стилей и фиксы
│       │   ├── sprite_template.scss  # Переменные с размерами SVG иконок (автосборка)
│       │   └── variables.scss        # Переменные
│       └── app.scss                  # Главный стилевой файл
├── dist/                             # Сборка (автогенерация)
│   ├── assets/                       # Подключаемые ресурсы
│   │   ├── libs/                     # Файлы сторонних библиотек
│   │   │   ├── js/                   # JS файлы библиотек
│   │   │   └── css/                  # CSS файлы библиотек
│   │   ├── fonts/                    # Шрифты
│   │   ├── images/                   # Изображения
│   │   │   └── sprites/              # Спрайты (автогенерация)
│   │   ├── scripts/                  # Скрипты
│   │   └── styles/                   # Стили
│   └── index.html                    # Страница
├── tasks/                            # Подключаемые скрипты с задачами для gulpfile.babel.js
│   ├── config.js                     # Конфигурация
│   ├── copy.js                       # Копирование
│   ├── images.js                     # Сборка картинок
│   ├── libs.js                       # Сборка сторонних библиотек
│   ├── rename-predist.js             # Переименование dist папки при production-сборке
│   ├── scripts.js                    # Сборка скриптов
│   ├── sprite.js                     # Сборка векторного спрайта
│   ├── styles.js                     # Сборка стилей
│   ├── templates.js                  # Сборка страниц из шаблонов
│   ├── watch.js                      # Отслеживание изменений и запуск задач
│   └── zip.js                        # Архивация папки dist
├── .babelrc                          # Конфигурация babel
├── browserlist                       # Список версий браузеров для задач Gulp
├── .editorconfig                     # Конфигурация настроек редактора кода
├── .eslintignore                     # Список исключений для проверки JavaScript в ESLint
├── .eslintrc                         # Конфигурация проверки JavaScript в ESLint
├── .gitignore                        # Список исключённых файлов из Git
├── .lintstagedrc                     # Конфикугация lint-staged для husky
├── .sass-lint.yml                    # Конфигурация проверки SCSS в StyleLint
├── .stylelintrc                      # Конфигурация проверки SCSS в StyleLint
├── gulpfile.babel.js                 # Файл для запуска Gulp.js
├── make-block.js                     # Утилита создания новых блоков
├── libs-links.js                     # Пути к сторонним библиотекам
├── make-block.js                     # Скрипт создания структурных модулей проекта
├── package.json                      # Список модулей и прочей информации
└── README.md                         # Документация шаблона
```
