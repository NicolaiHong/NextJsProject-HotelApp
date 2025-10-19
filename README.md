This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Properties page bug (October 2025)

**Issue**

- Trong `app/properties/page.tsx` bạn dùng `properties.map((properties) => ...)`. Biến vòng lặp trùng tên với mảng gốc nên nó “che” biến phía ngoài. Khi React cố đọc `properties.length` hay truyền prop vào `PropertyCard`, TypeScript không còn phân biệt được đâu là mảng đâu là từng object, dễ dẫn tới lỗi kiểu.
- Ngoài ra class Tailwind `lg:conatiner` bị đánh sai chính tả nên layout không nhận breakpoint.
- Kiểu dữ liệu `square_feet` trong `PropertyCard` khai báo là `string` trong khi JSON thực tế là số, gây cảnh báo “number không gán được cho string”.

**Fix**

- Đổi tên biến vòng lặp thành `property` để tránh shadowing và giúp TypeScript hiểu đúng kiểu.
- Sửa `lg:conatiner` thành `lg:container`.
- Đồng bộ kiểu `square_feet` thành `number` và format bằng `toLocaleString()`.

Những thay đổi này giữ code dễ đọc, đúng kiểu và tránh bug runtime lẫn lint.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
