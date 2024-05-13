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
