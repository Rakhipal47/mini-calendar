# 📅 Mini Calendar Application

A responsive and dynamic **event management calendar web application** built using **Django, Python, HTML, CSS, and JavaScript**.  
This project allows users to manage daily schedules by adding, updating, and deleting events through an interactive calendar interface.

---

## 🚀 Features

- Monthly calendar view
- Add new events
- Update existing events
- Delete events
- Interactive UI with JavaScript
- Django backend integration
- SQLite database storage
- Responsive design

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Django

### Database
- SQLite3

---

## 📂 Project Structure

```plaintext
mini-calendar/
│
├── backend/
│
├── calendar_api/
│   ├── calendar_api/
│   ├── events/
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   │
│   ├── templates/
│   ├── db.sqlite3
│   └── manage.py
│
├── .gitignore
├── README.md
└── venv/
```

---

## ⚙️ Installation & Setup

### 1 Clone the repository

```bash
git clone https://github.com/Rakhipal47/mini-calendar.git
```

### 2 Navigate to project folder

```bash
cd mini-calendar
```

### 3 Create virtual environment

```bash
python -m venv venv
```

### 4 Activate virtual environment

**Windows**

```bash
venv\Scripts\activate
```

**Mac/Linux**

```bash
source venv/bin/activate
```

### 5 Install dependencies

```bash
pip install django
```

### 6 Run migrations

```bash
python manage.py migrate
```

### 7 Start development server

```bash
python manage.py runserver
```

### 8 Open in browser

```bash
http://127.0.0.1:8000/
```

---

## Future Improvements

- User authentication
- Event reminders
- Google Calendar integration
- Drag and drop scheduling
- Dark mode UI

---

## Learning Outcomes

This project helped in understanding:

- Django project structure
- CRUD operations
- Frontend + backend integration
- Database handling
- Event management system development

---

## Author

**Rakhipal47**
