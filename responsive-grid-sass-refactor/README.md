# Responsive Grid - SASS Refactor

Bài tập tái cấu trúc mã CSS từ source gốc `codegym-vn/responsive-grid` sang SASS/SCSS.

## Cấu trúc

```text
responsive-grid-sass-refactor/
├── index.html
├── css/
│   └── main.css
└── scss/
    ├── abstracts/
    │   ├── _variables.scss
    │   └── _mixins.scss
    ├── base/
    │   └── _reset.scss
    ├── layout/
    │   └── _grid.scss
    ├── components/
    │   └── _blocks.scss
    └── main.scss
```

## Kiến thức SASS đã áp dụng

- Variables cho màu sắc, kích thước cột, opacity và border.
- Mixins cho grid cell và block dùng lại nhiều lần.
- Nesting với các modifier như `&--header`, `&--main`, `&--footer`.
- Partials để tách `abstracts`, `base`, `layout`, `components`.
- `main.scss` làm file tổng hợp.

## Biên dịch SCSS sang CSS

```bash
sass scss/main.scss css/main.css
```

Chế độ theo dõi:

```bash
sass scss/main.scss css/main.css --watch
```

Source tham khảo ban đầu: https://github.com/codegym-vn/responsive-grid
