![f1](https://github.com/user-attachments/assets/280b9a67-da2e-447d-a74c-d2ad92b339a8)
---
<strong>Dashboard interativo</strong> que exibe informações sobre vídeos de melhores momentos das corridas de Fórmula 1 da temporada 2024, utilizando dados extraídos diretamente da <strong>API do YouTube</strong>. Comentários relevantes desses vídeos são analisados por uma <strong>IA generativa (Google Gemini)</strong>, permitindo a geração de resumos em linguagem natural com os principais tópicos e sentimentos compartilhados pela comunidade — conectando dados e opiniões para revelar narrativas marcantes ao longo da temporada.

<br>

# 🔧 Tecnologias Utilizadas

### Backend
- Python 3.12.3
- Django 5.2.0
- Django REST Framework 3.16.0
- YouTube Data API v3
- Gemini (Google Generative AI)

### Frontend
- React
- TypeScript
- Vite
- Recharts
- Styled Components
- Axios
- Phosphor Icons

<br>

# 🚀 Como Rodar o Projeto

## Pré-requisitos
- Python 3.11+
- Node.js 18+
- Conta Google Cloud com chave de API do YouTube: https://console.cloud.google.com/
- Conta e API key do Gemini (Google Generative AI): https://ai.google.dev/

## Clone o repositório

```
git clone https://github.com/paulorosadodev/F1-Race-Highlights-Dashboard.git
cd F1-Race-Highlights-Dashboard
```

## Configure o Backend

### 1. Crie e ative o ambiente virtual Python
```
cd api
python -m venv venv
Linux/Mac: source venv/bin/activate
Windows: venv\Scripts\activate
```

### 2. Instale as dependências
```
pip install -r requirements.txt
```

### 3. Configure suas variáveis de ambiente
Crie um arquivo *.env* com o seguinte formato:
```
YOUTUBE_API_KEY=sua_chave
GOOGLE_API_KEY=sua_chave
```

### 4. Execute eo servidor
```
python manage.py runserver
```

## Configure o Frontend

### 1. Instale as dependências
```
cd ..
cd dashboard/
cd youtube-dashboard
npm install
```

### 2. Execute eo servidor
```
npm run dev
```

<br>

# 📌 Decisões Técnicas
- <strong>Django REST Framework</strong>: escolhido pela sua simplicidade e integração eficiente com frontends via APIs RESTful. A familiaridade prévia com a tecnologia também contribuiu para maior agilidade no desenvolvimento.
- <strong>Vite + React + TypeScript</strong>: stack moderna que oferece desempenho otimizado, tipagem estática e uma experiência de desenvolvimento fluida. A escolha foi motivada tanto pela eficiência quanto pelo domínio prévio das tecnologias.
- <strong>Gemini (Google Generative AI)</strong>: integrado para realizar análises semânticas dos comentários dos vídeos, retornando resumos com os principais tópicos discutidos. A escolha foi motivada pelo interesse em explorar as opiniões da comunidade como uma forma de construir uma visão geral da temporada, permitindo entender como cada corrida foi percebida pelo público.

# 😓 Maiores Desafios
- <strong>Instabilidade nas requisições ao Backend</strong>: enfrentei um bug ao requisitar dados do backend, onde ocasionalmente ocorria o erro [SSL: WRONG_VERSION_NUMBER] wrong version number (_ssl.c:2559). Esse problema causava falhas momentâneas nas chamadas à API e, em alguns casos, o servidor backend parava completamente, exigindo sua reinicialização manual. Para contornar essa instabilidade, implementei uma estratégia de retry automático com atraso progressivo, permitindo que o Frontend tentasse novamente a requisição por algumas vezes antes de exibir um erro ao usuário. 
- <strong>Limites da API do YouTube</strong>: foi necessário gerenciar cuidadosamente as chamadas para não exceder a cota diária. Para isso, implementei memória cache no localStorage do navegador, evitando requisições repetidas ao backend e reduzindo a sobrecarga no consumo da API.
- <strong>Integração com o Gemini</strong>: foi necessário ajustar o prompt cuidadosamente para que a resposta da IA viesse em um formato que fizesse sentido para o dashboard, permitindo a geração de insights claros e relevantes com base nos comentários analisados.
- <strong>Organização dos dados e charts</strong>: um dos maiores desafios foi estruturar a visualização dos dados e insights de forma clara, impactante e intuitiva. Pensei na experiência do usuário ao definir a disposição dos cards, textos e elementos gráficos para garantir uma fácil compreensão.

<br>

# 📊 Dashboard

## Início
![home](https://github.com/user-attachments/assets/95b07eb2-7e88-4988-94ef-4a11f8da24b6)

## Vídeos
![videos](https://github.com/user-attachments/assets/9e48c5cd-ec5b-46ba-b60f-5a1c1e9e4235)

## Vídeo
![d5fb4f91-c1ba-4f15-9f69-3e60bbf3db56](https://github.com/user-attachments/assets/7da0d9f0-8699-449a-9b84-c5276b9d952e)

<br>

# ✨ Funcionalidades Extras:
-  <strong>Busca e Filtragem de Vídeos</strong>: Permite buscar vídeos e aplicar filtros por data de postagem, número de visualizações, curtidas e comentários, com ordenação crescente ou decrescente.
-  <strong>Análise com IA generativa</strong>: Os comentários coletados são enviados para o modelo de linguagem Gemini, que retorna os 5 tópicos mais discutidos no vídeo.
