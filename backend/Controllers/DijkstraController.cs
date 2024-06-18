using Microsoft.AspNetCore.Mvc;
using TodoApi.ShortestPathAlgos;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DijkstraController : ControllerBase
    {
        [HttpGet]
        public string Get(IReadOnlyGraph graph)
        {
            return "Hello from API!";
        }
    }
}