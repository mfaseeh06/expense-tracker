# Expense Tracker Project

## Week 1 Summary

### Technology Stack
- **Front-end**: React with Tailwind CSS for a responsive and modern UI.
- **Back-end**: Express.js with Node.js for API development.
- **Database**: MongoDB for managing user and expense data.
- **Authentication**: JSON Web Tokens (JWT) for secure session handling.
- **Development Model**: Agile methodology for iterative development and quick adjustments.

---

### Authentication Flow

1. **Registration**:
   - The user submits their name, email, and password via the signup form.
   - Passwords are hashed using bcrypt before being stored in MongoDB.
   - A JWT is generated and sent back to the user for authentication.

2. **Login**:
   - The user provides their email and password.
   - The server verifies the credentials and issues a JWT upon successful login.

3. **Token Validation**:
   - Protected API routes verify the token using middleware before granting access.

---

### UI Structure

#### Completed:
- **Signup Screen**: A form for user registration.
- **Home Page**: Displays placeholders for expense categories (e.g., Clothing, Travel, Food, Education).

#### Upcoming Tasks:
- Expense entry form for each category.
- Expense summary screen showing categorized expenses.


### How to Run the Project

#### Clone the Repository:
```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker


# expense-tracker
# expense-tracker
