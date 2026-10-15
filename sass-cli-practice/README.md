# Thực hành cài đặt SASS bằng npm & SASS CLI

## 1. Kiểm tra Node.js và npm

```bash
node -v
npm -v
```

Nếu chưa có Node.js, tải tại trang chính thức của Node.js rồi cài đặt.

## 2. Cài đặt SASS bằng npm

```bash
npm install -g sass
sass -v
```

## 3. Biên dịch một file SCSS sang CSS

Trong thư mục `sass-cli-practice` chạy:

```bash
sass scss/styles.scss css/styles.css
```

## 4. Watch mode

```bash
sass scss/styles.scss css/styles.css --watch
```

Khi thay đổi `scss/styles.scss`, file `css/styles.css` sẽ được cập nhật tự động.

## 5. Biên dịch nhiều file SCSS theo thư mục

Thư mục `scss/` hiện có:

- `styles.scss`
- `components.scss`

Có thể biên dịch toàn bộ sang thư mục `css/` bằng:

```bash
sass scss/:css/
```

Hoặc bật chế độ theo dõi:

```bash
sass scss/:css/ --watch
```

## 6. Chạy bài

Mở file `index.html` bằng trình duyệt.

## 7. Cấu trúc dự án

```text
sass-cli-practice/
├── index.html
├── README.md
├── scss/
│   ├── styles.scss
│   └── components.scss
└── css/
    ├── styles.css
    └── components.css
```

## 8. Ghi chú lỗi PowerShell trên Windows

Nếu PowerShell chặn script npm/SASS, nên kiểm tra chính sách hiện tại trước. Có thể dùng phạm vi người dùng thay vì mở toàn bộ hệ thống:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Sau đó mở lại Terminal và kiểm tra:

```bash
sass -v
```
