# Frontend Assignment - React with Tailwind CSS

This project is a simple React application that demonstrates a dynamic table with dropdown and checkbox functionalities, styled using Tailwind CSS.

## Features

- **Dynamic Rows**: Users can add new rows to the table dynamically.
- **Dropdown for Label 1**: Each row has a dropdown to select a single option for "Label 1".
- **Checkbox for Label 2**: Each row has multiple checkboxes to select options for "Label 2".
- **Responsive Design**: Styled using Tailwind CSS for a clean and responsive UI.

## Prerequisites

- Node.js installed on your system
- npm or yarn as your package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/frontend-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend-assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up Tailwind CSS:
   - Install Tailwind CSS and its dependencies:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```
   - Configure `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: ["./src/**/*.{js,jsx,ts,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Add Tailwind directives to your `src/index.css` file:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

## Usage

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```
frontend-assignment/
├── src/
│   ├── App.js         # Main component with table logic
│   ├── index.js       # Entry point of the React application
│   └── index.css      # Tailwind CSS imports
├── public/
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## How It Works

1. **State Management**:

   - The application uses the `useState` hook to manage rows and their respective dropdown and checkbox values.

2. **Adding Rows**:

   - Clicking the "Add New Row" button appends a new row with empty values to the table.

3. **Dropdown and Checkbox Functionality**:

   - Dropdown (`<select>`) allows users to select a single option for "Label 1".
   - Checkboxes allow users to select multiple options for "Label 2".

4. **Styling**:
   - Tailwind CSS utility classes are used for consistent and responsive styling.

## Tailwind Classes Used

- **Layout**: `p-8`, `min-h-screen`, `overflow-x-auto`
- **Table Styling**: `border-collapse`, `py-3`, `px-4`, `hover:bg-gray-50`
- **Dropdowns & Inputs**: `bg-gray-50`, `border`, `rounded-md`, `focus:ring`
- **Button**: `px-6`, `py-2`, `bg-black`, `text-white`, `rounded-md`, `hover:bg-gray-800`

## Customization

1. **Modify Options**:

   - Update the `options` array in the `App.js` file to change the dropdown and checkbox values:
     ```javascript
     const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
     ```

2. **Styling**:
   - Customize Tailwind classes directly in the JSX or extend Tailwind's configuration in `tailwind.config.js`.

## Dependencies

- React
- Tailwind CSS

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Feel free to reach out if you have any questions or suggestions!
