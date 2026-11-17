# Website Nhà Xinh

Website tĩnh (HTML/CSS/JS) cho **Nhà Xinh – Xây dựng tại Phú Quốc**.

## Các trang

| Trang | File |
| --- | --- |
| Trang chủ | `index.html` |
| Giới thiệu | `gioi-thieu.html` |
| Công trình | `cong-trinh.html` |
| Dự án | `du-an.html` |
| Tuyển dụng | `tuyen-dung.html` |

## Cấu trúc

```
assets/
  css/style.css   # toàn bộ giao diện (màu, bố cục, responsive)
  css/fonts.css   # font Inter (tự host, có tiếng Việt)
  js/main.js      # menu mobile, bộ lọc công trình, form ứng tuyển
  fonts/          # Inter woff2
  img/            # logo và hình ảnh minh họa
```

Không cần build: mở `index.html` trong trình duyệt, hoặc chạy một server tĩnh:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

Có thể đưa lên GitHub Pages, Netlify, Vercel hoặc bất kỳ hosting tĩnh nào.

## Cần cập nhật

- Số điện thoại, email, Zalo, địa chỉ: nút "Liên hệ" và "Trao đổi với chúng tôi" hiện trỏ tới khối liên hệ `#lien-he`.
- Form ứng tuyển chưa nối backend: hiện chỉ hiển thị lời cảm ơn (xem `form[data-static]` trong `assets/js/main.js`). Có thể nối với Formspree, Google Forms hoặc email.
- Tên khách hàng trong phần đánh giá (`cong-trinh.html`) và hình ảnh minh họa.

## Màu thương hiệu

Navy `#0B2A45` · Navy đậm `#071E32` · Gold `#DFB356` · Ivory `#F7F5F0`
