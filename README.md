
# PawQuest - Lost Pet Finder Application

## 🐾 About PawQuest

PawQuest is a comprehensive web application designed to help reunite lost pets with their owners through an innovative QR code tag system. Built with the MERN stack, this platform provides a seamless experience for pet owners to register their pets and for good Samaritans to help lost pets find their way home.

## ✨ Features

### Core Functionality
- **QR Code Pet Tags**: Custom pet tags with unique QR codes for easy identification
- **Pet Registration**: Complete pet profile system with detailed information
- **Lost Pet Search**: Dedicated search functionality to find missing pets
- **Instant Contact**: Direct communication between finders and pet owners
- **E-commerce Integration**: Purchase custom pet tags directly through the platform

### Pet Management
- **Detailed Pet Profiles**: Store comprehensive information including:
  - Pet name, breed, age, and gender
  - Physical characteristics (weight, microchip status)
  - Medical information (vaccination records, special needs)
  - Owner contact details
- **Photo Upload**: Visual identification with pet photos
- **QR Code Generation**: Automatic QR code creation for each registered pet

### User Experience
- **Responsive Design**: Mobile-friendly interface for on-the-go access
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Integrated e-commerce for tag purchases
- **Order Management**: Complete checkout and billing system

## 🛠️ Technology Stack

### Frontend
- **React.js**: Modern JavaScript library for building user interfaces
- **CSS3**: Responsive styling and animations
- **HTML5**: Semantic markup

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling

### Additional Technologies
- **QR Code Generation**: Dynamic QR code creation
- **Authentication**: User session management
- **Payment Integration**: Secure payment processing
- **Image Upload**: Pet photo storage and management

## 📱 How It Works

### Step 1: Register Tag
- Pet owners scan the QR code on their pet's tag using their phone
- Enter pet name and contact information
- Complete pet profile with detailed information

### Step 2: Lost Your Pet?
- If a pet gets lost, ensure contact information is up to date
- The QR code on the tag remains active for scanning

### Step 3: Finder Scans
- Good Samaritan finds the pet and scans the QR code on the tag
- Instant access to pet information and owner contact details
- Direct communication with the pet owner

### Step 4: Be Reunited
- Pet is safely returned home
- Owners can give their pets extra love and care
- Gentle reminder to keep pets close in the future

## 🚀 Getting Started

### Prerequisites
```
Node.js (v14 or higher)
MongoDB
npm or yarn package manager
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pawquest.git
cd pawquest
```

2. **Install server dependencies**
```bash
npm install
```

3. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

4. **Environment Setup**
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/pawquest
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

5. **Start the application**
```bash
# Development mode (runs both server and client)
npm run dev

# Production mode
npm start
```

## 📂 Project Structure

```
pawquest/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main App component
│   └── public/             # Static assets
├── server/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── server.js           # Server entry point
├── config/                 # Configuration files
└── README.md
```

## 🔧 API Endpoints

### Authentication
```
POST /api/auth/register     - User registration
POST /api/auth/login        - User login
GET  /api/auth/profile      - Get user profile
```

### Pet Management
```
GET    /api/pets            - Get all pets
POST   /api/pets            - Create new pet profile
PUT    /api/pets/:id        - Update pet information
DELETE /api/pets/:id        - Delete pet profile
GET    /api/pets/search/:id - Search pet by ID
```

### QR Code
```
GET  /api/qr/:petId         - Generate QR code for pet
POST /api/qr/scan           - Process QR code scan
```

### Orders
```
POST /api/orders            - Create new order
GET  /api/orders            - Get user orders
PUT  /api/orders/:id        - Update order status
```

## 🎨 Available Pet Tags

The platform offers various custom pet tag designs:

```
Summit Scout Tag    - ₹1,099
Wave Rider Tag      - ₹2,099
Alphine Tag         - ₹1,599
Whisker Tag         - ₹5,599
```

Each tag includes:
- Durable, weather-resistant material
- Custom QR code
- Pet name engraving
- Contact information backup

## 🤝 Contributing

We welcome contributions to improve PawQuest! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/pawquest/issues) page
2. Create a new issue with detailed information
3. Contact our support team through the website

## 🌟 Acknowledgments

- Pet owners who trust our platform
- Community members who help reunite pets with their families
- Contributors who help improve the platform

## 📞 Contact

For business inquiries or support:
```
Website: [Your Website URL]
Email: support@pawquest.com
Phone: +91-XXXXXXXXXX
```

---

**Made with ❤️ for pets and their families**

*"Bringing lost pets safely back home, one scan at a time."*
Scan this Qr Code of a lost pet to get pet owner details
![Scan me Qr Tag](https://github.com/user-attachments/assets/54bd850b-fe23-4082-b88a-6cf553739c62)
