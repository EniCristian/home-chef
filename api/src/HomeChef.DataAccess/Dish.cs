namespace HomeChef.DataAccess
{
    public class Dish: EntityBase
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string ImageUri { get; set; }
    }
}