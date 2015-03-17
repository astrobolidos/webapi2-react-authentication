namespace webapi2_react_authentication.Controllers
{
    using System.Web.Http;

    [Authorize]
    public class ValuesController : ApiController
    {
        public IHttpActionResult GetValues()
        {
            return Ok(new[] { "a", "b", "c" });
        }
    }
}
