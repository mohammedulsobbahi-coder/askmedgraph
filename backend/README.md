
# move to backend directory
cd Documents/DSRA_Thesis/askmedgraph-react/backend

# create virtual environment
python3 -m venv venv        

# activate on Mac/Linux
source venv/bin/activate

# Install dependencies
pip install flask flask-cors neo4j pandas numpy matplotlib openai langchain seaborn anthropic pymssql
python -m pip install flask-cors
pip install -U langchain-community

# Run Flask
pip show flask-cors

export FLASK_APP=app.py
export FLASK_ENV=development
python -m flask run
flask run

# =============================================================================
# =============================================================================


# AskMedGraph Backend

This is the backend API for **AskMedGraph**, a healthcare knowledge graph Q&A system. It provides endpoints to query the knowledge graph or SQL Server using different language models (GPT-4o-mini, Claude 3.5 Haiku, DeepSeek Chat).

---

## Prerequisites

- Python 3.12+
- `venv` (recommended)
- Required Python packages listed in `requirements.txt`:


Flask
flask-cors
pandas
numpy
matplotlib
seaborn
langchain-community
neo4j
openai




> ⚠️ Note: Some modules like `langchain` have deprecated imports. Use `langchain-community` for chat models.

---

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/askmedgraph-react.git
cd askmedgraph-react/backend



Create virtual environment

python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows


Install dependencies

pip install -r requirements.txt


Set environment variables (optional, if using API keys)




export OPENAI_API_KEY="your_openai_api_key"
export ANTHROPIC_API_KEY="your_anthropic_api_key"
export DEEPSEEK_API_KEY="your_deepseek_api_key"










Run Backend

Start the Flask server:

python -m flask run


The API will be available at:

http://127.0.0.1:5000










API Endpoints
/api/search (POST)

Query the backend with a question.

Request Body:

{
  "query": "Your question here",
  "llmModel": "GPT-4o-mini",
  "source": "Knowledge Graph"
}


Response Example:

{
  "query": "Get nodes count",
  "answer": "This report provides an overview of the total count of nodes...",
  "insights": [["Total Nodes", "5505114"]],
  "entities": [],
  "timestamp": "2025-08-14T21:13:30.157496",
  "nodes": [],
  "edges": [],
  "processingTime": 1523
}


The processingTime field is in milliseconds.

Notes

Make sure Neo4j and SQL Server credentials are configured correctly in the helper classes.

The backend uses a helper class StreamlitHelper for querying different language models and sources.

For local testing, a mock response is returned if no API URL is set or in development mode.

Troubleshooting

ModuleNotFoundError: Make sure your virtual environment is activated and all packages are installed.

LangChainDeprecationWarning: Update imports to langchain-community as recommended.


This is **all in a single `.md` block**, ready to save as `README.md`.  

If you want, I can also **create a ready-to-use `requirements.txt`** for your backend so you can j



