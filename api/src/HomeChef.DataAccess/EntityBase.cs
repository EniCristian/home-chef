using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HomeChef.DataAccess;

public class EntityBase
{
    [Key]
    public Guid Id { get; set; }

    public EntityBase()
    {
        Id = Guid.NewGuid();
    }
}