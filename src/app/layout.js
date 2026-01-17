import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import BreadcrumbSchema from '@/Components/BreadcrumbSchema';
import { ListProvider } from 'Context/ListContext';
 

export const metadata = {
  title: 'woofiedo',
  description: 'Your website description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <BreadcrumbSchema />
      </head>
      <body>
        <ListProvider>
          {children}
        </ListProvider>
      </body>
    </html>
  );
}