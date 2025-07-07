# NLPNewsApp

![1](./public/1.png)
![1](./public/2.png)

---

## Machine Learning (ML) Overview

### 1. Overview of ML Approach
This project uses large language models (LLMs) for question and answer generation, leveraging the Mistral model and HuggingFace datasets. The goal is to generate and evaluate questions and answers from news or document contexts.

### 2. Data
- **Source:** [Natural Questions Short](https://huggingface.co/datasets/ghmfx/natural-questions-short) from HuggingFace Datasets.
- **Preprocessing:**
  - PDF/document loading and text extraction
  - Text chunking using `RecursiveCharacterTextSplitter`
- **Splits:**
  - Training and evaluation splits as provided by the dataset

### 3. Model(s) Used
- **Model:** Mistral-7B-Instruct (local GGUF format)
- **Libraries:**
  - `langchain`, `CTransformers`, `sentence_transformers`, `chromadb`, `FAISS`, `huggingface-hub`, `datasets`
- **Embeddings:** `sentence-transformers/all-mpnet-base-v2`
- **Prompt Engineering:** Custom prompts for both question and answer generation

### 4. Training & Inference
- **Training:**
  - Not fine-tuned; uses pre-trained models for inference
  - For custom fine-tuning, scripts and notebook cells are provided in `Mistral.ipynb`
- **Inference:**
  - Run the pipeline in `Mistral.ipynb` to generate questions and answers from input documents

### 5. Evaluation
- **Metrics:**
  - ROUGE, BLEU, BERTScore, METEOR
- **How to Run:**
  - See `Mistral.ipynb` for evaluation code and metric calculation
- **Example Results:**
  - Metrics are printed and saved during evaluation runs

### 6. Usage
- **How to Use:**
  - Place your documents in the appropriate location
  - Run the notebook cells in `Mistral.ipynb` to generate and evaluate Q&A pairs
- **Example Input/Output:**
  - Input: Context and question from dataset or document
  - Output: Generated answer or question, saved to CSV

### 7. Reproducibility
- **Environment:**
  - Install dependencies using pip (see notebook for `!pip install ...` commands)
  - Use Colab or local environment with GPU for best performance
- **Random Seeds:**
  - Set seeds in code if strict reproducibility is required

### 8. References
- [Mistral Model](https://mistral.ai/)
- [HuggingFace Datasets](https://huggingface.co/datasets)
- [LangChain](https://python.langchain.com/)

### 9. Known Issues & TODOs
- Some cells require Google Drive mounting for file access
- Large models may require significant RAM/VRAM
- TODO: Add more robust error handling and support for additional datasets

---