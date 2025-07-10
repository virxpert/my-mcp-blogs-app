# MyBlogs

A fully automated, open-source blog generation system that creates posts—with original text, AI-generated images, plagiarism and copyright checks, and references—using only free and open tools, all with minimal cost (under CAD$5).

---

## Features

- **Automated blog content generation** using open-source LLMs (Llama, Mistral, etc.)
- **Image generation** using Stable Diffusion or similar models
- **Plagiarism and copyright checks** for both text and images (using open tools and limited free APIs)
- **Automated citation and reference generation**
- **Static site generation** with free hosting (GitHub Pages/Netlify)
- **Workflow automation** using scripts or GitHub Actions
- **No paid APIs, subscriptions, or cloud resources required**

---

## Requirements

### Hardware
- Your own laptop or desktop (Windows/Mac/Linux)
- Minimum: 8GB RAM, i5/Ryzen 5 or better for local AI models

### Software & Tools

| Component            | Tool/Service(s)          | Free? | Purpose                                      |
|----------------------|-------------------------|-------|----------------------------------------------|
| Text Generation      | Ollama, llama.cpp, GPT4All | Yes | Run open LLMs locally                       |
| Image Generation     | Stable Diffusion WebUI   | Yes   | AI-generated images                          |
| Copyright Check (Text) | Plagiarism-checker scripts  | Yes   | Text similarity check                        |
| Copyright Check (Image) | TinEye/Google Images (manual/API) | Yes | Image originality check                      |
| References           | Zotero CLI, Manubot      | Yes   | Reference/citation generation                |
| Static Site Generator| Hugo, Jekyll, Eleventy   | Yes   | Blog generation from markdown                |
| Hosting              | GitHub Pages             | Yes   | Free static blog hosting                     |
| Automation           | GitHub Actions, n8n, scripts | Yes | Automate the workflow                        |
| Optional UI          | Gradio, Streamlit        | Yes   | Simple local web interface                   |

---

## Workflow Overview

1. **Input:** User provides a blog topic or keywords.
2. **Content Generation:** Local LLM generates a blog draft.
3. **Image Generation:** Stable Diffusion generates relevant images.
4. **Plagiarism & Copyright Check:**
    - Text: Compare against open datasets or Wikipedia.
    - Images: Reverse image search (manual or automated for a few images).
5. **Reference Generation:** Automatically add references/citations.
6. **Blog Post Assembly:** Markdown file is created with images and citations.
7. **Site Generation & Publishing:** Static site generator builds the blog, which is published via GitHub Pages.
8. **Automation:** Use scripts or GitHub Actions to automate the entire pipeline.

---

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/MyBlogs.git
cd MyBlogs
```

### 2. Install Dependencies

- Python 3.x
- Node.js (for some static site generators)
- Ollama or llama.cpp (for local LLMs)
- Stable Diffusion Web UI or equivalent
- Hugo/Jekyll/Eleventy (choose one)
- Git (for GitHub Pages)
- Optional: Gradio/Streamlit, n8n, Zotero/Manubot

For Ubuntu/Debian:

```sh
# Example install commands
sudo apt update
sudo apt install python3 python3-pip git
# Install Node.js, Hugo, etc. as needed
```

### 3. Download Models

- Download an open LLM model (e.g., Llama 3 8B) for Ollama or llama.cpp.
- Download Stable Diffusion model weights.

### 4. Configure Static Site Generator

- Initialize your static site (e.g., with Hugo: `hugo new site .`)
- Customize your config and theme as desired.

### 5. Set Up GitHub Pages

- Push your repo to GitHub.
- Enable GitHub Pages in the repository settings.

---

## Example Automated Pipeline (Pseudocode)

```python
# generate_blog.py
topic = input("Enter blog topic: ")
text = generate_with_llm(topic)
image = generate_with_stable_diffusion(text)
if not plagiarism_check(text):
    print("Warning: Possible plagiarism detected.")
if not image_copyright_check(image):
    print("Warning: Possible image copyright issue.")
references = generate_references(text)
create_markdown_post(text, image, references)
build_and_publish_site()
```

---

## Limitations

- **Performance**: Running models locally requires decent hardware.
- **Plagiarism check**: Only as good as your dataset and scripts.
- **Copyright check (images)**: Free APIs may be rate-limited.
- **No paid APIs**: To ensure cost stays at $0.

---

## License

MIT License. All generated content belongs to the creator unless otherwise noted.

---

## Contributing

PRs and improvements are welcome!

---

## Author

[virxpert](https://github.com/virxpert)