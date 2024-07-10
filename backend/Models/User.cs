namespace RoutingDemo.Models;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string JobTitle { get; set; } = string.Empty;
    public decimal Salary { get; set; } = decimal.Zero;
    public DateTime HireDate { get; set; } = DateTime.Today;
}
