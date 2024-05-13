using Microsoft.EntityFrameworkCore;
using TaskControlApi.Models;

namespace TaskControlApi.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
        }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}
