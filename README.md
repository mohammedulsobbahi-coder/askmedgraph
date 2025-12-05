Deploy:

git remote set-url origin https://mohammedulsobbahi-coder@github.com/mohammedulsobbahi-coder/askmedgraph.git
git config --global credential.helper store
git push origin main



git credential-osxkeychain erase
host=github.com
protocol=https
[press Enter twice]

git remote set-url origin https://mohammedulsobbahi-coder@github.com/mohammedulsobbahi-coder/askmedgraph.git


git push origin main


username: mohammedulsobbahi-coder
password: github_pat_11ASJZ3BY0hR9HRF0MrrC9_JkzpGsVUnMMC52adIFePNvTWZSpLSu6AUFgXjBc17



git remote set-url origin git@github.com:mohammedulsobbahi-coder/askmedgraph.git

ssh -T git@github.com
git push origin main

npm install --save-dev gh-pages




git remote set-url origin git@github.com:mohammedulsobbahi-coder/askmedgraph.git
npx gh-pages -d build -b gh-pages -r git@github.com:mohammedulsobbahi-coder/askmedgraph.git -f



########################

npm start

npm install --save-dev gh-pages
npm run deploy

########################
####  Steps:        ####
########################

- git remote set-url origin git@github.com:mohammedulsobbahi-coder/askmedgraph.git

- ssh -T git@github.com

- git add .
- git commit -m "deploy setup"
- git push origin main

- npm run deploy

########################

# AskMedGraph - Healthcare Knowledge Graph Q&A

A modern React application for querying healthcare knowledge graphs using AI-powered language models.

## 🚀 Features

- **Interactive Knowledge Graph Visualization** with D3.js
- **AI-Powered Search** with multiple LLM options
- **Responsive Design** for all devices
- **Real-time Query Processing** with loading states
- **Collapsible Sidebar** with settings
- **Copy-to-Clipboard** functionality
- **Sample Questions** for quick start
- **Error Handling** and user feedback

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Tailwind CSS** - Styling
- **D3.js** - Graph Visualization
- **Lucide React** - Icons
- **Modern JavaScript (ES6+)** - Language

## 📦 Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-repo-url>
   cd askmedgraph-app
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your API configuration
   \`\`\`

4. **Start development server:**
   \`\`\`bash
   npm start
   \`\`\`

## 🔧 Environment Variables

Create a \`.env\` file with:

\`\`\`
REACT_APP_API_URL=http://localhost:8000
GENERATE_SOURCEMAP=false
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/           # React components
│   ├── Sidebar.js       # Settings sidebar
│   ├── SearchBox.js     # Search interface
│   ├── AnswerBox.js     # Answer display
│   └── KnowledgeGraph.js # D3.js graph visualization
├── services/            # API services
│   └── api.js          # Backend communication
├── App.js              # Main application
└── index.js            # React entry point
\`\`\`

## 🎯 Usage

1. **Open the sidebar** using the menu button or Ctrl+B
2. **Select your preferences:**
   - Data Source (Knowledge Graph/SQL Server)
   - Language Model (GPT-4o Mini/Claude/DeepSeek)
3. **Enter your query** or click a sample question
4. **Press Search** or use Ctrl+Enter
5. **Explore results:**
   - Read the AI-generated answer
   - Interact with the knowledge graph
   - View insights and entities

## 🔌 Backend Integration

The app expects a FastAPI backend with these endpoints:

- \`POST /search\` - Main search functionality
- \`GET /health\` - Health check
- \`GET /models\` - Available models
- \`GET /sources\` - Data sources

## 🚀 Deployment

### Development
\`\`\`bash
npm start
\`\`\`

### Production Build
\`\`\`bash
npm run build
\`\`\`

### Deploy to Netlify/Vercel
1. Build the project: \`npm run build\`
2. Upload \`build/\` folder
3. Set environment variables in hosting dashboard

## 🎨 Customization

### Themes
Modify \`tailwind.config.js\` for custom colors and animations.

### Components
Each component is modular and can be easily customized:
- \`Sidebar.js\` - Settings and preferences
- \`SearchBox.js\` - Query interface
- \`AnswerBox.js\` - Response formatting
- \`KnowledgeGraph.js\` - D3.js visualization

## 📱 Responsive Features

- **Mobile-first design** with touch-friendly interface
- **Collapsible sidebar** with overlay on mobile
- **Adaptive layouts** for different screen sizes
- **Keyboard shortcuts** for power users

## 🧪 Testing

\`\`\`bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Mohammad Al Sobbahi** - *Lebanese University*

## 🙏 Acknowledgments

- D3.js for powerful graph visualization
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons
- React community for excellent tooling
