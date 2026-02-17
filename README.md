# MarketHub

A full-stack marketplace platform built with Next.js 14, PostgreSQL, and Stripe integration.

## 🎯 Features

- **Product Listings**: Browse and search products from multiple sellers
- **Seller Dashboards**: Manage inventory, orders, and analytics
- **Secure Payment**: Stripe integration for safe transactions
- **Authentication**: NextAuth.js for user management
- **Admin Panel**: Manage users, products, and transactions
- **Real-time Orders**: Live order tracking and notifications
- **Responsive Design**: Mobile-first approach for all devices
- **Search & Filters**: Advanced product discovery

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Payment**: Stripe API
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Hosting**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/markethub.git
cd markethub

# Install dependencies
npm install

# Setup database
npx prisma migrate dev

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/markethub

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# OAuth (Optional)
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

## 📁 Project Structure

```
markethub/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── api/                  # API routes
│   │   ├── auth/            # Authentication endpoints
│   │   ├── products/        # Product endpoints
│   │   └── orders/          # Order endpoints
│   └── globals.css          # Global styles
├── components/               # Reusable components
├── lib/                      # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                   # Static assets
└── package.json
```

## 🚀 API Endpoints

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create product (seller only)
- `GET /api/products/:id` - Get product details
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

## 💳 Stripe Integration

The marketplace integrates with Stripe for secure payments:

1. Products have prices in USD
2. Checkout creates a Stripe checkout session
3. Webhooks handle payment confirmations
4. Sellers receive payouts

## 👥 User Roles

- **Customer**: Browse and purchase products
- **Seller**: List products and manage orders
- **Admin**: Manage all users, products, and transactions

## 📊 Database Schema

### Users
- id, email, name, password, role, createdAt

### Products
- id, name, description, price, sellerId, image, inventory, createdAt

### Orders
- id, userId, products, total, status, createdAt

### Transactions
- id, orderId, stripeId, status, amount, createdAt

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Secure environment variables
- CSRF protection
- SQL injection prevention via Prisma
- PCI compliance with Stripe

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import this repository
5. Add environment variables
6. Deploy

### Database Setup

1. Use Vercel's PostgreSQL database or provision externally
2. Update DATABASE_URL in environment
3. Run migrations: `npx prisma migrate deploy`

## 📈 Future Enhancements

- [ ] Multi-currency support
- [ ] Product recommendations
- [ ] Seller analytics dashboard
- [ ] Review and rating system
- [ ] Wishlist feature
- [ ] Bulk product import
- [ ] Mobile app
- [ ] Real-time chat support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Status**: ✅ Production Ready  
**Last Updated**: February 2026
