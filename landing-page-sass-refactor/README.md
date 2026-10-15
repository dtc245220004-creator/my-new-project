# Bài tập: Tái cấu trúc mã CSS sang SASS

## Nội dung đã thực hiện
- Giữ nguyên các phần chính của Landing Page: navigation + header, sản phẩm nổi bật, số liệu thống kê và footer.
- Tách SCSS thành các partials rõ ràng.
- Sử dụng Variables để quản lý màu sắc, kích thước, shadow và transition.
- Sử dụng Mixins cho flex center, spacing, card surface và responsive breakpoint.
- Sử dụng Nesting cho navbar, hero, card, statistics và footer.
- Biên dịch `scss/main.scss` thành `css/style.css` để trang web sử dụng trực tiếp.

## Cấu trúc thư mục
```
landing-page-sass-refactor/
├── index.html
├── css/
│   └── style.css
└── scss/
    ├── abstracts/
    │   ├── _variables.scss
    │   └── _mixins.scss
    ├── base/
    │   └── _base.scss
    ├── layout/
    │   └── _layout.scss
    ├── components/
    │   └── _components.scss
    └── main.scss
```

## Lệnh biên dịch
```bash
sass scss/main.scss css/style.css
```

Chế độ tự động theo dõi:
```bash
sass scss/main.scss css/style.css --watch
```
