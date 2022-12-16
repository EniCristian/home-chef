using HomeChef.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HomeChef.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DummyDishesController : ControllerBase
    {
        private readonly HomeChefContext _context;

        public DummyDishesController(HomeChefContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<Dish> Add(Dish dish)
        {
            var addedDish =  _context.Dishes.Add(dish);
            await _context.SaveChangesAsync();
            return addedDish.Entity;
        }

        [HttpGet]
        public async Task<IEnumerable<Dish>> GetAll()
        {
            return await _context.Dishes.ToListAsync();
        }
    }
}
