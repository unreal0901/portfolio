---  

title: "ShivID: Personalized Digital Visiting Card System"  

description: "An innovative platform for small businesses to create dynamic and interactive digital visiting cards, leveraging modern web technologies."  

date: "10/09/2023"  

demoURL: "https://digital-v-card-front-end.vercel.app/"  

repoURL: "private"  

---  

![Admin Portal](https://i.imgur.com/HbcD4Qm.png)  

ShivID revolutionizes the way small businesses, including shops and gyms, showcase their products and services by introducing dynamic and personalized digital visiting cards. The platform enables shopkeepers to easily share real-time updates of their offerings, promoting a stronger online presence and seamless communication with potential clients.  

## Tech Stack  

**Admin Portal:**  
- React.js  
- React Router  
- Redux Toolkit with RTK Query  

**Frontend Application:**  
- Next.js  
- Upstash redis for counting views

**Backend:**  
- Node.js (Express.js)  
- MongoDB  
- AWS S3 for image storage  
- Mongoose  

## Project Overview  

ShivID replaces traditional paper visiting cards with a dynamic, interactive alternative. The platform consists of:  

- **Admin Portal:** Exclusively used by ShivID administrators to manage shopkeeper details, generate personalized visiting cards, and oversee the system.  
- **Client-Side Frontend:** A public-facing application where clients can showcase their business details through personalized links, accessible to potential customers.  

## Features  

- **Real-Time Updates:** Shopkeepers can request updates to their digital visiting cards, ensuring their offerings remain current.  
- **Social Media Integration:** Easy sharing of visiting card links across platforms like WhatsApp and others.  
- **Visitor Analytics:** Displays rough visitor counts for digital visiting cards.  
- **Environment-Friendly:** A paperless solution that reduces environmental impact.  

## Application Components  

- **Admin Portal:**  
  - Centralized control for ShivID admins.  
  - Facilitates creation and management of digital visiting cards.  
  - Configured for internal use only.  

- **Client-Side Frontend:**  
  - Public-facing personalized visiting cards built with Next.js.  
  - Unique shareable links for shopkeepers.  
  - Displays business details, testimonials, reviews, and products.  

## Development Methodology  

### 1. Requirements Gathering:  
- Conducted market research to identify the needs of small businesses.  
- Defined core features such as real-time updates and social media integration.  

### 2. System Design:  
- Designed the system architecture, including backend admin portal and frontend visiting card view.  
- Defined database schemas with Mongoose for storing business details.  
- Integrated AWS S3 for image storage.  

### 3. Admin Portal Development:  
- Developed the admin interface using React.js, React Router, and Redux Toolkit.  
- Implemented secure authentication and access controls.  

### 4. Frontend Application Development:  
- Built the client-facing frontend with Next.js.  
- Designed a personalized visiting card view with real-time shop details and social sharing capabilities.  

### 5. Backend Development:  
- Developed the backend using Express.js and MongoDB.  
- Created secure APIs for managing client data.  
- Configured Mongoose models and Multer for image upload handling.  

### 6. Testing:  
- Conducted unit and end-to-end testing for all components.  
- Fixed bugs identified during testing.  

### 7. Deployment:  
- Hosted the admin portal, backend, and APIs on AWS EC2.  
- Deployed the Next.js frontend application.  

### 8. User Training:  
- Created documentation and conducted workshops to train shopkeepers and admins.  

### 9. Maintenance & Upgrades:  
- Continuous monitoring and bug fixes.  
- Regular feature upgrades and scalability improvements.  

## Run Locally  

1. Clone the repository:  
```bash  
> Not available for cloning
```  

2. Install dependencies and start the project:  
```bash  
# Backend  
cd backend  
npm install  
npm run start  

# Frontend run for both frontend admin and frontend customer Digital card
cd ../frontend  
npm install  
npm run dev  
```  

## Environment Variables  

### Backend:  
- `MONGODB_URI`: MongoDB connection string  
- `AWS_S3_BUCKET`: Bucket name for image storage  
- `AWS_ACCESS_KEY_ID`: AWS access key  
- `AWS_SECRET_ACCESS_KEY`: AWS secret key  

### Frontend:  
- `NEXT_PUBLIC_API_URL`: Backend API base URL  

## Images  

![Digital Visiting Card](https://i.imgur.com/7cjEZ6D.png)  
![Digital Visiting Card](https://i.imgur.com/kmqznn5.png)  
![Digital Visiting Card](https://i.imgur.com/yH0cqsT.png)  
![Digital Visiting Card](https://i.imgur.com/RZHJnJj.png)  
![Digital Visiting Card](https://i.imgur.com/n6CRiTJ.png)  

_Public-Facing Digital Visiting Card_  

## Contact  
To discuss more about this project, contact **Aditya Singh Rawat** at rawats090@gmail.com.  