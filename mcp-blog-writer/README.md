# MCP Blog Writer

## Overview
The MCP Blog Writer is a lightweight tool designed to assist users in generating blog content efficiently while adhering to a cost limit of CAD$5. This tool utilizes various services to create high-quality content, relevant images, and ensures compliance with copyright regulations.

## Features
- **Content Generation**: Automatically generates blog content based on a specified topic.
- **Image Generation**: Produces relevant images to accompany the generated content.
- **Quality Verification**: Checks the quality of the generated content to ensure it meets standards.
- **Reference Validation**: Validates references used in the content to ensure accuracy and reliability.
- **Copyright Management**: Ensures that all generated content complies with copyright laws.

## Project Structure
```
mcp-blog-writer
├── src
│   ├── server.ts
│   ├── tools
│   │   ├── content-generator.ts
│   │   ├── image-generator.ts
│   │   ├── quality-checker.ts
│   │   ├── reference-validator.ts
│   │   └── copyright-manager.ts
│   ├── services
│   │   ├── ai-service.ts
│   │   ├── image-service.ts
│   │   └── validation-service.ts
│   ├── utils
│   │   ├── cost-tracker.ts
│   │   └── logger.ts
│   └── types
│       └── index.ts
├── config
│   ├── mcp-config.json
│   └── api-keys.example.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mcp-blog-writer
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the server and use the MCP Blog Writer tool, run:
```
npm start
```
You can then access the API endpoints to generate content, images, and perform validations.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.