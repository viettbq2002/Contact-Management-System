# Yêu cầu chạy
- NodeJS >= v20.10.0 (Tốt nhất là vào https://nodejs.org/en cài lại node js mới nhất để chạy frontend)
- .NET6.0
- Đảm bảo Project Backend chạy trên port *localhost:7158*
# Hướng dẫn chạy
## 1. Chạy script Database
## 2. Chạy Backend
1. `cd .\Backend\ContactManagementApi\`
2. dotnet run
3. nếu sử dụng visual studio thì mở solution backend rồi chạy project api
## 3. Chạy Frontend
1. `cd .\Frontend\`
2. `npm install`
3. `npm run dev`
  *note:* Chạy lần `npm install` lần đầu các lần sau kh chỉ cần run dev

# Features
- CRUD Contact
- CRUD Category, Add Contact to Category ✅
- Authentication (Login, Logout, Register), JWT ✅
- Profile ✅
- Contact Filte Table (Search/Sort/Filter By) ✅ 
