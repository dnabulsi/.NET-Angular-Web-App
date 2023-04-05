using System.ComponentModel.DataAnnotations;

namespace EmployeeWebAPI
{
  public class EmployeeTransaction
  {
    [Key]
    public int TranId { get; set; }
    public int EmpId { get; set; }
    public DateOnly TranDt { get; set; }
    public string TranRemarks { get; set; }

    public EmployeeTransaction(string tranRemarks)
    {
      TranRemarks = tranRemarks ?? throw new ArgumentNullException(nameof(tranRemarks));
    }
  }
}
