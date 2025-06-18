// app/layout.js or app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

export const metadata = {
  title: 'woofiedo',
  description: 'Your website description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
