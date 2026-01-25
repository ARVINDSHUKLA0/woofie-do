import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'; 
import { ListProvider } from 'Context/ListContext';
 

export const metadata = {
  title: 'WoofieDo - Pet Care, Boarding & Grooming Center Noida ',
  description: 'Get fast pet care, boarding, grooming, and transportation services in Noida. Woofie Do is the best vet caring center who offer affordable pet insurance & relocation service.',
Kewords: "Pet Care, pet care services, pet care center, Noida Pet Care Center, pet care center in Noida, veterinary care center, veterinary care in Noida, veterinary care services in Noida premium pet care services, pet care clinic, advanced pet care center, pet boarding in Noida, pet boarding services, pet boarding Noida, pet boarding clinic, Vet grooming services, pet grooming center, pet insurance, pet transportation services, pet relocation services in Noida, pet relocation service," };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
      </head>
      <body>
        <ListProvider>
          {children}
        </ListProvider>
      </body>
    </html>
  );
}