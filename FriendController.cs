using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using FriendMangementApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FriendMangementApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FriendController : ControllerBase
  {
    private readonly FriendsContext _context;
    public FriendController(FriendsContext context)
    {
      _context = context;
      if (_context.Friends.Count() == 0)
      {
        _context.Friends.Add(new Friend { Name = "Item1" });
        _context.SaveChanges();
      }
    }
        // GET: api/<controller>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Friend>>> GetFriend()
    {
      return await _context.Friends.ToListAsync();
    }
    // GET: api/Friend/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Friend>> GetFriends(string id)
    {
      var Friend = await _context.Friends.FindAsync(id);

      if (Friend == null)
      {
        return NotFound();
      }
      return Friend;
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTodoItem(long id, FriendsContext friends)
    {
      if (id != friends.id)
      {
        return BadRequest();
      }

      _context.Entry(friends).State = EntityState.Modified;
      await _context.SaveChangesAsync();

      return NoContent();
    }
  }
}

   
