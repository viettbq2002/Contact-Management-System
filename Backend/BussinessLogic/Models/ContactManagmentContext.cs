using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BussinessLogic.Models
{
    public partial class ContactManagmentContext : DbContext
    {
        public ContactManagmentContext()
        {
        }

        public ContactManagmentContext(DbContextOptions<ContactManagmentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Contact> Contacts { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId)
                    .ValueGeneratedNever()
                    .HasColumnName("category_id");

                entity.Property(e => e.CategoryName).HasColumnName("category_name");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.HasMany(d => d.Contacts)
                    .WithMany(p => p.Categories)
                    .UsingEntity<Dictionary<string, object>>(
                        "ContactCategory",
                        l => l.HasOne<Contact>().WithMany().HasForeignKey("ContactId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_Contact_Category_Contact"),
                        r => r.HasOne<Category>().WithMany().HasForeignKey("CategoryId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_Contact_Category_Category"),
                        j =>
                        {
                            j.HasKey("CategoryId", "ContactId");

                            j.ToTable("Contact_Category");

                            j.IndexerProperty<int>("CategoryId").HasColumnName("category_id");

                            j.IndexerProperty<int>("ContactId").HasColumnName("contact_id");
                        });
            });

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.Property(e => e.ContactId).HasColumnName("contact_id");

                entity.Property(e => e.Address).HasColumnName("address");

                entity.Property(e => e.BirthDate)
                    .HasColumnType("datetime")
                    .HasColumnName("birth_date");

                entity.Property(e => e.CompanyName).HasColumnName("company_name");

                entity.Property(e => e.Email)
                    .HasMaxLength(10)
                    .HasColumnName("email")
                    .IsFixedLength();

                entity.Property(e => e.FullName).HasColumnName("full_name");

                entity.Property(e => e.Hobby).HasColumnName("hobby");

                entity.Property(e => e.IsMarked).HasColumnName("is_marked");

                entity.Property(e => e.Nickname).HasColumnName("nickname");

                entity.Property(e => e.Note).HasColumnName("note");

                entity.Property(e => e.Phone).HasColumnName("phone");

                entity.Property(e => e.Position).HasColumnName("position");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Website).HasColumnName("website");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Contacts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Contact_User");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Address).HasColumnName("address");

                entity.Property(e => e.Dob)
                    .HasColumnType("datetime")
                    .HasColumnName("dob");

                entity.Property(e => e.FullName).HasColumnName("full_name");

                entity.Property(e => e.HashedPassword).HasColumnName("hashed_password");

                entity.Property(e => e.Phone).HasColumnName("phone");

                entity.Property(e => e.Username).HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
