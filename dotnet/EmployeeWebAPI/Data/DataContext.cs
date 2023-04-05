using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EmployeeWebAPI.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Employee> Employees => Set<Employee>();

    public DbSet<EmployeeTransaction> EmployeeTransactions => Set<EmployeeTransaction>();

    protected override void ConfigureConventions(ModelConfigurationBuilder builder)
    {
      builder.Properties<DateOnly>()
          .HaveConversion<DateOnlyConverter>()
          .HaveColumnType("date");
    }
  }

  /// <summary>
  /// Converts <see cref="DateOnly" /> to <see cref="DateTime"/> and vice versa.
  /// </summary>
  public class DateOnlyConverter : ValueConverter<DateOnly, DateTime>
  {
    /// <summary>
    /// Creates a new instance of this converter.
    /// </summary>
    public DateOnlyConverter() : base(
            d => d.ToDateTime(TimeOnly.MinValue),
            d => DateOnly.FromDateTime(d))
    { }
  }
}
