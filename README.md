## Project Boilerplate

- Project Boilerplate

## Môi trường cài đặt

- Node JS version: >=18.17.1
- Next JS version: 13.4

## Các packages / configs sử dụng trong dự án

Xem [docs](./docs)

## Các bước cài đặt

- Bước 1: `npm run install` - cài đặt thư viện
- Bước 2: `npm run setup` - chạy script chọn cài đặt các config sau:
  - Tên dự án
  - Cài đặt Theme config
  - Cập nhật auth config nếu được tích hợp lên Gchat
  - Cài đặt tích hợp Sentry
- Bước 3: `npm run dev`

## Chi tiết các config có trong setup

### Theme config

- Cài đặt chức năng chuyển đổi theme trong ứng dụng mặc định có 2 theme sáng/tối, nếu không tích hợp chọn `No`

Sau khi chạy setup theme config sẽ tạo mới 2 file config trong [configs](./src/configs)

1. **Thêm và sử dụng mã màu mới**

- Thêm mới các mã màu trong file [themeColor](./src/configs/themeColor.ts) tương ứng với 2 bảng màu LIGHT và DARK

  Lưu ý: key của các mã màu cần giống nhau ở cả 2 bảng màu
  VD:

```ts
export const LIGHT: IColor = {
  // ...
  background: '#fff',
  primary: '#000',
};

export const DARK: IColor = {
  // ...
  background: '#000',
  primary: '#fff',
};
```

- Sử dụng trong component với class của tailwind với format sau: namespace + th + key

VD:

```js
<span className="bg-th-background text-th-primary">Text primary with background color!</span>
```

2. **Sử dụng trong component**

- Lấy giá trị theme hiện tại và fn đổi theme bằng cách sử dụng hook `useTheme`:

```jsx
import { useTheme } from '@/provider';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
}
```

3. **Khi dark mode cần 1 mã màu custom**

- Chúng ta có thể ghi đè giá trị của màu hiện tại khi chuyển sang dark mode như sau:
  dark:(tên class của mã màu tương ứng)

VD:

```js
// text-th-primary sẽ được áp dụng cho light mode và text-th-gray-100 sẽ được áp dụng cho dark mode
<span className="bg-th-background text-th-primary dark:text-th-gray-100">ABC</span>
```

4. **Thêm mới bảng màu**

- Trực tiếp thêm mới bảng màu trong file [themeColor](./src/configs/themeColor.ts)

  Lưu ý:

  1. key của các mã màu cần giống nhau ở các bảng màu
  2. Cần thêm property `display` để thể hiện tên của bảng màu
     VD:

  ```ts
  export const CUSTOM: IColor = {
    display: 'custom',
    background: '#ddd',
    primary: '#fff',
    //..
  };
  ```

Đọc thêm: [dark-mode-nextjs](https://git.ghtk.vn/quannt86/dark-mode-nextjs)

### Cập nhật Auth config

- Đối với các dự án có tích hợp lên Gchat thông qua iframe cần cập nhật cookie options samesite để tránh bị block third party cookie bởi chính sách của trình duyệt, nếu không tích hợp chọn `No`

Sau khi chạy sẽ cập nhật lại auth [config](./src/configs/Auth/config.ts) như sau:

```json
// cookieOptions
{
  "secure": true,
  "sameSite": "none",
  "path": "/",
  "httpOnly": true
}
```

### Sentry

- Cài đặt tích hợp dự án với Sentry nhằm hỗ trợ monitoring, nếu không tích hợp chọn `No`

Nếu thực hiện cài đặt sẽ cần thêm 2 thông tin sau:

- Sentry project name: tên project trên sentry
- Sentry DSN: [Data source name](https://docs.sentry.io/product/sentry-basics/concepts/dsn-explainer/) của dự án

Sau khi nhập xong sẽ thực hiện cài đặt `@sentry/nextjs` package cùng với các file:

1. sentry.client.config.ts
2. sentry.edge.config.ts
3. sentry.server.config.ts

Ngoài ra thực hiện update sentry config trong [next.config](./next.config.js)

### Other

- Ngoài các config trên chạy setup sẽ tạo thêm file .env mặc định như sau:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_OIDC_ISSUER=https://auth.ghtklab.com
NEXT_PUBLIC_OIDC_AUTH_URL=https://id.ghtklab.com
OIDC_REDIRECT_URI=http://localhost:3000/api/auth/callback
OIDC_CLIENT_ID=
OIDC_CLIENT_SECRET=

NEXT_PUBLIC_GCHAT_API_URL=https://chat.ghtklab.com
```

- Lưu ý: Cần thêm client ID và Secret để có thể run dev local

## Các bước deploy lên testing/production

- Bước 1: `npm run install` - cài đặt thư viện
- Bước 2: `npm run build` - build project
- Bước 3: `npm run start` - run project
