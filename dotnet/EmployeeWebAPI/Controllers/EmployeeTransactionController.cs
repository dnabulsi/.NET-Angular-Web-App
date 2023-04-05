using EmployeeWebAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeWebAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmployeeTransactionController : ControllerBase
  {
    private readonly DataContext _context;

    public EmployeeTransactionController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<EmployeeTransaction>>> GetEmployeeTransactions()
    {
      return Ok(await _context.EmployeeTransactions.ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<List<EmployeeTransaction>>> CreateEmployeeTransactions(EmployeeTransaction employeeTransaction)
    {
      _context.EmployeeTransactions.Add(employeeTransaction);
      await _context.SaveChangesAsync();

      return Ok(await _context.EmployeeTransactions.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<EmployeeTransaction>>> UpdateEmployeeTransactions(EmployeeTransaction employeeTransaction)
    {
      var employeeTransactionData = await _context.EmployeeTransactions.FindAsync(employeeTransaction.TranId);

      if (employeeTransactionData == null)
        return BadRequest("Employee transaction not found!");

      employeeTransactionData.EmpId = employeeTransaction.EmpId;
      employeeTransactionData.TranDt = employeeTransaction.TranDt;
      employeeTransactionData.TranRemarks = employeeTransaction.TranRemarks;

      await _context.SaveChangesAsync();

      return Ok(await _context.EmployeeTransactions.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<EmployeeTransaction>>> DeleteEmployeeTransaction(int id)
    {
      var employeeTransactionData = await _context.EmployeeTransactions.FindAsync(id);
      if (employeeTransactionData == null)
        return BadRequest("Employee transaction not found!");

      _context.EmployeeTransactions.Remove(employeeTransactionData);
      await _context.SaveChangesAsync();

      return Ok(await _context.EmployeeTransactions.ToListAsync());
    }
  }
}
