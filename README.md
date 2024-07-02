# Yêu cầu chạy
- NodeJS >= v20.10.0 (Tốt nhất là vào https://nodejs.org/en cài lại node js mới nhất để chạy frontend)
- .NET6.0
- Đảm bảo Project Backend chạy trên port *localhost:7158*
- SQL Server
# Hướng dẫn chạy
## 1. Chạy script Database
Mở file script trong sql server rồi chạy
Nếu tạo DB tên khác thì lưu ý phải sửa trong connection string lại

## Sửa Connection String Trong Backend
```
Vào file appsetting.json sử dòng
 "DefaultConnection": "Server=(local);uid=sa;pwd=123456;database=ContactManagment;TrustServerCertificate=true"
password chỉnh cho giống password sql servrr trên local
```

## 2. Chạy Backend
1. `cd .\Backend\ContactManagementApi\`
2. dotnet run
3. nếu sử dụng visual studio thì mở solution backend rồi chạy project api
## 3. Chạy Frontend
1. `cd .\Frontend\`
2. `npm install`
3. `npm run dev`
  *note:* Chạy  `npm install` lần đầu các lần sau  chỉ cần run dev

# Features
- CRUD Contact ✅
- CRUD Category, Add Contact to Category ✅
- Authentication (Login, Logout, Register), JWT ✅
- Profile ✅
- Contact Filte Table (Search/Sort/Filter By ..., Pagination) ✅

  ![image](https://github.com/viettbq2002/Contact-Management-System/assets/98259617/99e9d540-8ef6-4109-be87-4e603098a1ed)

  ![image](https://github.com/viettbq2002/Contact-Management-System/assets/98259617/594a500d-faea-4c3f-9e87-80e86d93f7ac)

  ![image](https://github.com/viettbq2002/Contact-Management-System/assets/98259617/1db3ced2-6b37-40bb-8ce0-cd56919762b2)

  ![image](https://github.com/viettbq2002/Contact-Management-System/assets/98259617/cef29457-2feb-4392-80e0-8de5e909bcd0)



