// Este arquivo define a estrutura da entidade Tarefa que será usada pelo Entity Framework para mapear para a tabela de tarefas no banco de dados.


namespace TaskControlApi.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public int SLA { get; set; }  // Horas corridas
        public DateTime DataCriacao { get; set; } = DateTime.Now;
        public DateTime? DataConclusao { get; set; }
        public string CaminhoArquivo { get; set; }
        public string FilePath { get; set; }

    }
}
