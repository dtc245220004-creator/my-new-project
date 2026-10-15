# Chuyển đổi CSS sang SASS theo chuẩn

Bài thực hành tổ chức lại CSS truyền thống thành SCSS theo cấu trúc partials chuẩn.

## Cấu trúc thư mục

```text
sass-refactor-standard/
├── abstracts/
│   ├── _variables.scss
│   └── _mixins.scss
├── base/
│   └── _global.scss
├── layout/
│   └── _container.scss
├── components/
│   ├── _buttons.scss
│   └── _cards.scss
├── main.scss
├── styles.css
└── README.md
```

## Nội dung đã áp dụng

- Variables
- Mixins
- Nesting
- Partials
- Import vào `main.scss`
- Biên dịch SCSS sang CSS

## Lệnh biên dịch

```bash
sass main.scss styles.css
```

Theo dõi thay đổi tự động:

```bash
sass main.scss styles.css --watch
```
