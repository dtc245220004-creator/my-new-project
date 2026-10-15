# Thực hành SASS Variables & Mixins

Bài thực hành tối ưu CSS bằng SASS variables và mixins.

## Cấu trúc

- `abstracts/_variables.scss`: khai báo biến giao diện.
- `abstracts/_mixins.scss`: khai báo mixins tái sử dụng.
- `base/_typography.scss`: style cho tiêu đề.
- `components/_buttons.scss`: component nút sử dụng mixin.
- `components/_cards.scss`: component card sử dụng mixin.
- `main.scss`: import toàn bộ partials.
- `main.css`: CSS sau khi biên dịch.

## Biên dịch

```bash
sass main.scss main.css
```

Theo dõi tự động:

```bash
sass main.scss main.css --watch
```
