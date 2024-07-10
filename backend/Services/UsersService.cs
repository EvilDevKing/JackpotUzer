using System.Data;
using Npgsql;
using RoutingDemo.Models;

namespace RoutingDemo.Services;

public class UsersService(NpgsqlConnection connection) : IUserService, IDisposable
{

    public async Task<IEnumerable<User>> GetAll() {
        var users = new List<User>();
        using var cmd = connection.CreateCommand();
        cmd.CommandText = "SELECT * FROM users.user;";
        await connection.OpenAsync();
        using var reader = await cmd.ExecuteReaderAsync();
        if (reader is not null) {
            while (await reader.ReadAsync()) {
                var user = new User
                {
                    Id = Convert.ToInt32(reader["id"]),
                    FirstName = Convert.ToString(reader["first_name"])!,
                    LastName = Convert.ToString(reader["last_name"])!,
                    JobTitle = Convert.ToString(reader["job_title"])!,
                    Salary = Convert.ToDecimal(reader["salary"]),
                    HireDate = Convert.ToDateTime(reader["hire_date"])
                };
                users.Add(user);
            }
        }
        await connection.CloseAsync();
        return [.. users];
    }

    public async Task<bool> Create(User user) {
        const string insertQuery =
            "INSERT INTO users.user (first_name, last_name, job_title, salary, hire_date) " +
            "VALUES (@FirstName, @LastName, @JobTitle, @Salary, @HireDate)";
        using var cmd = connection.CreateCommand();
        cmd.CommandText = insertQuery;
        AddParameters(cmd, user);
        await connection.OpenAsync();
        var rowAffected = await cmd.ExecuteNonQueryAsync();
        await connection.CloseAsync();
        return rowAffected > 0;
    }
    
    public async Task<bool> Update(User user) {
        const string updateQuery =
                "UPDATE users.user SET first_name = @FirstName, last_name = @LastName, " +
                "job_title = @JobTitle, salary = @Salary, hire_date = @HireDate WHERE id = @Id";

        using var cmd = connection.CreateCommand();
        cmd.CommandText = updateQuery;
        AddParameters(cmd, user);
        await connection.OpenAsync();
        var rowAffected = await cmd.ExecuteNonQueryAsync();
        await connection.CloseAsync();
        return rowAffected > 0;
    }
    
    public async Task<bool> Delete(int id) {
        const string deleteQuery = "DELETE FROM users.user WHERE id = @Id";
        using var cmd = connection.CreateCommand();
        cmd.CommandText = deleteQuery;
        cmd.Parameters.AddWithValue("@Id", id);
        await connection.OpenAsync();
        var rowAffected = await cmd.ExecuteNonQueryAsync();
        await connection.CloseAsync();
        return rowAffected > 0;
    }

    private static void AddParameters(NpgsqlCommand command, User user)
    {
        var parameters = command.Parameters;

        parameters.AddWithValue("@Id", user.Id);
        parameters.AddWithValue("@FirstName", user.FirstName ?? string.Empty);
        parameters.AddWithValue("@LastName", user.LastName ?? string.Empty);
        parameters.AddWithValue("@JobTitle", user.JobTitle ?? string.Empty);
        parameters.AddWithValue("@Salary", user.Salary);
        parameters.AddWithValue("@HireDate", user.HireDate);
    }
    public void Dispose() {
        if (connection.State != ConnectionState.Closed) {
            connection.Close();
        }
        GC.SuppressFinalize(this);
    }
}

