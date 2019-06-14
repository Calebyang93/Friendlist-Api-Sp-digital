using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FriendMangementApi.Models
{
  public class Friend
  {
    public string Id { get; set; }
    public string Name {get; set;}
    public bool IsComplete { get; set; }
  }
}
