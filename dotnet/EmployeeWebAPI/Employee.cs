using System.ComponentModel.DataAnnotations;

namespace EmployeeWebAPI
{
  public class Employee
  {
    [Key]
    public int EmpId { get; set; }
    public string EmpName { get; set; }
    public int CityId { get; set; }
    public DateOnly EmpDOB { get; set; }

    public Employee(string empName)
    {
      EmpName = empName ?? throw new ArgumentNullException(nameof(empName));
    }
  }
}
