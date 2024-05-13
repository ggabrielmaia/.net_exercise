using Microsoft.EntityFrameworkCore;
using TaskControlApi.Models;

// Este arquivo define o contexto do Entity Framework para interação com o banco de dados especificado na configuração de conexão.

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
