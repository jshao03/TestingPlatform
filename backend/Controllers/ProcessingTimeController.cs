using Microsoft.AspNetCore.Mvc;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessingTimeController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Hello from API!";
        }
    }
}