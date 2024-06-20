using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using TodoApi.ForClient;
using TodoApi.ShortestPathAlgos;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DijkstraController : ControllerBase
    {
        [HttpGet("GetNodes")]
        public IActionResult Get(IReadOnlyGraph graph)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new DefaultContractResolver
                {
                    NamingStrategy = new CamelCaseNamingStrategy
                    {
                        ProcessDictionaryKeys = true,
                        OverrideSpecifiedNames = true
                    }
                },
                Formatting = Formatting.Indented
            };

            var result = new ForClientGraph(graph.Nodes, graph.Graph);
            var jsonResult = JsonConvert.SerializeObject(result, settings);

            return Ok(jsonResult);
        }
    }
}