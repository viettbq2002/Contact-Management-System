USE [master]
GO
/****** Object:  Database [ContactManagment]    Script Date: 7/2/2024 11:30:07 PM ******/
CREATE DATABASE [ContactManagment]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ContactManagment', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ContactManagment.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ContactManagment_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ContactManagment_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ContactManagment] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContactManagment].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContactManagment] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ContactManagment] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ContactManagment] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ContactManagment] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ContactManagment] SET ARITHABORT OFF 
GO
ALTER DATABASE [ContactManagment] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ContactManagment] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ContactManagment] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ContactManagment] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ContactManagment] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ContactManagment] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ContactManagment] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ContactManagment] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ContactManagment] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ContactManagment] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ContactManagment] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ContactManagment] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ContactManagment] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ContactManagment] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ContactManagment] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ContactManagment] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ContactManagment] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ContactManagment] SET RECOVERY FULL 
GO
ALTER DATABASE [ContactManagment] SET  MULTI_USER 
GO
ALTER DATABASE [ContactManagment] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ContactManagment] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ContactManagment] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ContactManagment] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ContactManagment] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ContactManagment] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ContactManagment', N'ON'
GO
ALTER DATABASE [ContactManagment] SET QUERY_STORE = OFF
GO
USE [ContactManagment]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 7/2/2024 11:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[category_id] [int] IDENTITY(1,1) NOT NULL,
	[category_name] [nvarchar](max) NOT NULL,
	[description] [nvarchar](max) NULL,
	[user_id] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contact]    Script Date: 7/2/2024 11:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[contact_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [uniqueidentifier] NOT NULL,
	[phone] [nvarchar](max) NOT NULL,
	[full_name] [nvarchar](max) NOT NULL,
	[company_name] [nvarchar](max) NULL,
	[email] [nvarchar](max) NULL,
	[nickname] [nvarchar](max) NULL,
	[hobby] [nvarchar](max) NULL,
	[is_marked] [nvarchar](max) NULL,
	[address] [nvarchar](max) NULL,
	[website] [nvarchar](max) NULL,
	[birth_date] [datetime] NULL,
	[position] [nvarchar](max) NULL,
	[note] [nvarchar](max) NULL,
 CONSTRAINT [PK_Contact_1] PRIMARY KEY CLUSTERED 
(
	[contact_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contact_Category]    Script Date: 7/2/2024 11:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact_Category](
	[category_id] [int] NOT NULL,
	[contact_id] [int] NOT NULL,
 CONSTRAINT [PK_Contact_Category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC,
	[contact_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 7/2/2024 11:30:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[id] [uniqueidentifier] NOT NULL,
	[username] [nvarchar](max) NOT NULL,
	[full_name] [nvarchar](max) NOT NULL,
	[dob] [datetime] NULL,
	[address] [nvarchar](max) NULL,
	[phone] [nvarchar](max) NOT NULL,
	[hashed_password] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Category] ON 
GO
INSERT [dbo].[Category] ([category_id], [category_name], [description], [user_id]) VALUES (3, N'Design', N'Professionals specializing in creative and graphic design.', N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7')
GO
INSERT [dbo].[Category] ([category_id], [category_name], [description], [user_id]) VALUES (4, N'Health', N'Professionals focused on health and wellness.', N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7')
GO
INSERT [dbo].[Category] ([category_id], [category_name], [description], [user_id]) VALUES (5, N'Marketing', N'Professionals skilled in marketing and advertising.', N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7')
GO
INSERT [dbo].[Category] ([category_id], [category_name], [description], [user_id]) VALUES (7, N'Social', N'', N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7')
GO
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 
GO
INSERT [dbo].[Contact] ([contact_id], [user_id], [phone], [full_name], [company_name], [email], [nickname], [hobby], [is_marked], [address], [website], [birth_date], [position], [note]) VALUES (7, N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'+1-342-678-9012', N'John Cena', N'Creative Designs Ltd.', N'janesmith@example.com', N'Janie', N'painting', NULL, N'5678 Oak Avenue, Metropolis, NY, 10101', N'http://www.creativedesigns.com', NULL, N'Art Director', N'Expert in graphic design.')
GO
INSERT [dbo].[Contact] ([contact_id], [user_id], [phone], [full_name], [company_name], [email], [nickname], [hobby], [is_marked], [address], [website], [birth_date], [position], [note]) VALUES (8, N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'+1-456-789-0123', N'Michael Johnson', N'Finance Experts LLC', N'michaeljohnson@example.com', N'Mike', N'golf', N'false', N'9101 Pine Road, Capital City, TX, 75201', N'http://www.financeexperts.com', CAST(N'1978-11-30T15:55:17.030' AS DateTime), N'Chief Financial Officer', N'Specializes in corporate finance.')
GO
INSERT [dbo].[Contact] ([contact_id], [user_id], [phone], [full_name], [company_name], [email], [nickname], [hobby], [is_marked], [address], [website], [birth_date], [position], [note]) VALUES (9, N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'+1-789-012-3456', N'Sarah Wilson', N'Marketing Masters Inc.', N'sarahwilson@example.com', N'Sally', N'cooking', N'true', N'3456 Maple Street, Rivertown, CA, 90210', N'http://www.marketingmasters.com', CAST(N'1992-12-12T15:55:17.030' AS DateTime), N'Marketing Manager', N'Expert in digital marketing strategies.')
GO
INSERT [dbo].[Contact] ([contact_id], [user_id], [phone], [full_name], [company_name], [email], [nickname], [hobby], [is_marked], [address], [website], [birth_date], [position], [note]) VALUES (10, N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'+1-567-890-1234', N'Emily Davis', N'Health Solutions Co.', NULL, N'Em', N'yoga', N'true', N'2345 Birch Boulevard, Seaside, FL, 32459', N'http://www.healthsolutions.com', CAST(N'1988-09-18T15:55:17.030' AS DateTime), N'Wellness Coach', N'Focuses on holistic health.')
GO
INSERT [dbo].[Contact] ([contact_id], [user_id], [phone], [full_name], [company_name], [email], [nickname], [hobby], [is_marked], [address], [website], [birth_date], [position], [note]) VALUES (11, N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'+1-678-901-2345', N'David Brown', N'NetCompany', N'dan@gmail.com', N'Dan', NULL, NULL, NULL, N'https://day.js.org/docs/en/display/format', NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (3, 9)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (3, 11)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (4, 8)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (4, 10)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (5, 7)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (5, 10)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (5, 11)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (7, 7)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (7, 9)
GO
INSERT [dbo].[Contact_Category] ([category_id], [contact_id]) VALUES (7, 11)
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'57a5abb1-6a0a-44dc-bf1d-435476cb5c98', N'testtest', N'Test User', CAST(N'2024-07-18T17:00:00.000' AS DateTime), NULL, N'0977322554', N'$2a$11$VZWkMJwo8dd.FJvEtIWOwuYWx/r1zu99jRvV2SG710Rirlrw.nw.G')
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'5b7976c4-3c96-4c8d-827b-bfed5a82bedd', N'viet', N'Quoc Viet', CAST(N'2024-06-25T17:00:00.000' AS DateTime), N'73/5/3B Nguyễn Khuyến', N'0911699778', N'$2a$11$Go2yxmxGKP6d8s7XsK/qGOjheYJTfJok7uvgPELxnQXUIfZx6JXV2')
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'4564b1fd-cc6d-4775-a6e0-d096297e8fa0', N'viet2', N'Quoc Viet', CAST(N'2024-06-25T17:00:00.000' AS DateTime), N'73/5/3B Nguyễn Khuyến', N'0911699778', N'$2a$11$Wx6y7eIIL4T8Y924egtIee.Bmz7wTK2Uh4b8S1JnAM9os8DN4Pjs2')
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'85f92fae-e760-4582-ab9d-d6c1e8ee67d7', N'string', N'string', CAST(N'2024-06-29T09:24:41.177' AS DateTime), N'string', N'string', N'$2a$11$ivXCtI3Y/6NaiS3uCl5nqeIfAkj7FxoCMB1AA9UVFcYZjNtsijXZW')
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'25ee9789-549b-40a1-a24e-e3022ff9c089', N'qưeqwewqewq', N'string', CAST(N'2024-06-30T18:12:27.907' AS DateTime), N'string', N'string', N'$2a$11$DAUaONntdpedpDhP0JfvputVqZFYbhnubFHxRWmkNJzFpi5vx2GX.')
GO
INSERT [dbo].[User] ([id], [username], [full_name], [dob], [address], [phone], [hashed_password]) VALUES (N'83dc8569-fa14-43a6-a240-ec295d1dfaf9', N'string', N'string', CAST(N'2024-06-29T09:24:41.177' AS DateTime), N'string', N'string', N'$2a$11$1NsHfkOivURFfECmmi.YquaxVqwpMpYzcFnHxNVWSvtgzXB4OYAmy')
GO
ALTER TABLE [dbo].[Category]  WITH CHECK ADD  CONSTRAINT [FK_Category_User] FOREIGN KEY([user_id])
REFERENCES [dbo].[User] ([id])
GO
ALTER TABLE [dbo].[Category] CHECK CONSTRAINT [FK_Category_User]
GO
ALTER TABLE [dbo].[Contact]  WITH CHECK ADD  CONSTRAINT [FK_Contact_User] FOREIGN KEY([user_id])
REFERENCES [dbo].[User] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contact] CHECK CONSTRAINT [FK_Contact_User]
GO
ALTER TABLE [dbo].[Contact_Category]  WITH CHECK ADD  CONSTRAINT [FK_Contact_Category_Category] FOREIGN KEY([category_id])
REFERENCES [dbo].[Category] ([category_id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contact_Category] CHECK CONSTRAINT [FK_Contact_Category_Category]
GO
ALTER TABLE [dbo].[Contact_Category]  WITH CHECK ADD  CONSTRAINT [FK_Contact_Category_Contact] FOREIGN KEY([contact_id])
REFERENCES [dbo].[Contact] ([contact_id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contact_Category] CHECK CONSTRAINT [FK_Contact_Category_Contact]
GO
USE [master]
GO
ALTER DATABASE [ContactManagment] SET  READ_WRITE 
GO
