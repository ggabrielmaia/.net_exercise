using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using TaskControlApi.Data;


// Este arquivo configura o host do aplicativo web, adiciona serviços ao container DI e configura o pipeline de processamento de solicitações HTTP.


var builder = WebApplication.CreateBuilder(args);

// Adicionar o serviço DbContext usando PostgreSQL
builder.Services.AddDbContext<TaskContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("TaskDatabase")));

// Adicionar serviços do controller
builder.Services.AddControllers();

// Adicionar o Swagger para documentar a API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Task Control API", Version = "v1" });
});

var app = builder.Build();

// Configuração para usar o Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Task Control API V1");
        options.RoutePrefix = string.Empty;  // Set the Swagger UI at the app's root
    });
}

// Middleware para redirecionar HTTP para HTTPS
app.UseHttpsRedirection();

// Middleware para roteamento
app.UseAuthorization();

// Mapear os controladores para rotas
app.MapControllers();

// Rodar a aplicação
app.Run();
