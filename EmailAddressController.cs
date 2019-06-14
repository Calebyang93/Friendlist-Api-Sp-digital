using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FriendMangementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailAddressController : ControllerBase
    {
        // GET: api/EmailAddress
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1@email.com", "value2@email.com" };
        }

        // GET: api/EmailAddress/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/EmailAddress
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/EmailAddress/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
