using RoutingDemo.Models;

namespace RoutingDemo.Services;

public interface IUserService
{
    Task<IEnumerable<User>> GetAll();
    Task<bool> Create(User user);
    Task<bool> Update(User user);
    Task<bool> Delete(int id);
}
