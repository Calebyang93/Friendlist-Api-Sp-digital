using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FriendMangementApi.Models
{
  public class FriendsContext : DbContext
  {
    public FriendsContext(DbContextOptions<FriendsContext> options)
      : base(options)
    {
    }
    public DbSet<Friend> Friends { get; set; }
  }
}
