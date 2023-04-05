using EmployeeWebAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeWebAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmployeeController : ControllerBase
  {
    private readonly DataContext _context;

    public EmployeeController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Employee>>> GetEmployees()
    {
      return Ok(await _context.Employees.ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<List<Employee>>> CreateEmployee(Employee employee)
    {
      _context.Employees.Add(employee);
      await _context.SaveChangesAsync();

      return Ok(await _context.Employees.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee employee)
    {
      var employeeData = await _context.Employees.FindAsync(employee.EmpId);

      if (employeeData == null)
        return BadRequest("Employee not found!");

      employeeData.EmpName = employee.EmpName;
      employeeData.CityId = employee.CityId;
      employeeData.EmpDOB = employee.EmpDOB;

      await _context.SaveChangesAsync();

      return Ok(await _context.Employees.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Employee>>> DeleteEmployee(int id)
    {
      var employeeData = await _context.Employees.FindAsync(id);
      if (employeeData == null)
        return BadRequest("Employee not found!");

      _context.Employees.Remove(employeeData);
      await _context.SaveChangesAsync();

      return Ok(await _context.Employees.ToListAsync());
    }
   }
}
