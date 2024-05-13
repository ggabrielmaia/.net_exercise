# Task Management Application

Este projeto é uma aplicação de gerenciamento de tarefas que permite aos usuários criar, editar, deletar e visualizar tarefas. Ele inclui um frontend construído com React e um backend desenvolvido com .NET Core.

## Funcionalidades

- Listar todas as tarefas.
- Adicionar uma nova tarefa.
- Editar uma tarefa existente.
- Deletar uma tarefa.
- Visualizar detalhes de uma tarefa específica.
- Upload de arquivos relacionados às tarefas.

## Tecnologias Utilizadas

- **Frontend**: React, Material-UI, JavaScript
- **Backend**: C#,.NET 5, Entity Framework Core
- **Database**: PostgreSQL

## Pré-requisitos

Para rodar este projeto, você precisará ter o seguinte instalado:

- .NET 5 SDK
- Node.js
- npm (geralmente vem com Node.js)
- PostgreSQL

## Configuração do PostgreSQL

Certifique-se de ter o PostgreSQL instalado e configurado em sua máquina. Você precisará criar um banco de dados e configurar a string de conexão apropriada no arquivo appsettings.json no projeto backend.

## Estrutura do Projeto

- **Backend**: Localizado na pasta /TaskControlApi. Contém o código .NET Core para a API. Para iniciar-lo, digite o comando dot run
- **Frontend**: Localizado na pasta /TaskControllFrontEnd. Contém o código React para a interface do usuário. Para iniciar-lo, digite npm install e logo após npm start
