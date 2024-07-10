using Microsoft.AspNetCore.Mvc;

using RoutingDemo.Models;
using RoutingDemo.Services;

namespace RoutingDemo.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController(IUserService userService) : ControllerBase
{
    [HttpGet]
    [Route("getAllUsers")]
    public async Task<ActionResult> GetAll() {
        return Ok(await userService.GetAll());
    }

    [HttpPost]
    [Route("create")]
    public async Task<ActionResult> Create([FromBody] User user) {
        return Ok(await userService.Create(user));
    }

    [HttpPut]
    [Route("update")]
    public async Task<ActionResult> Update([FromBody] User user) {
        return Ok(await userService.Update(user));
    }

    [HttpDelete]
    [Route("delete")]
    public async Task<ActionResult> Delete(int id) {
        return Ok(await userService.Delete(id));
    }
}


