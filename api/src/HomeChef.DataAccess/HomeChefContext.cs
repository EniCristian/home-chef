using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using System.Reflection.Metadata;

namespace HomeChef.DataAccess;

public class HomeChefContext : DbContext
{
    public DbSet<Dish> Dishes { get; set; }

    public HomeChefContext(DbContextOptions<HomeChefContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Dish>().HasData(new
            List<Dish>()
            {
                new Dish()
                {
                    Name = "Borsch",
                    ImageUri =
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnatashaskitchen.com%2Fclassic-russian-borscht-recipe%2F&psig=AOvVaw33iFApkXua5nKNWfZSnkk_&ust=1671229868824000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjs-8bW_PsCFQAAAAAdAAAAABAI"
                },
                new Dish()
                {
                    Name = "Lasagna",
                    ImageUri =
                        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
                },
            });
        base.OnModelCreating(modelBuilder);

    }
}