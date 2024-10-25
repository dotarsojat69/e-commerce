## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/dotarsojat69/e-commerce.git
cd e-commerce
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
POSTGRES_URL=
AUTH_SECRET=

PAYMENT_METHODS=Paypal, Stripe, CashOnDelivery
DEFAULT_PAYMENT_METHOD=Paypal

PAYPAL_CLIENT_ID=
PAYPAL_APP_SECRET=
PAYPAL_API_URL=

UPLOADTHING_TOKEN=

```
