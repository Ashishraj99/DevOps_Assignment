# Use the Ollama base image
FROM ollama/ollama-base:latest

# Set the working directory
WORKDIR /app

# Copy the API wrapper code
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose the port the app runs
EXPOSE 8000

# Define the command to run the app
CMD ["python", "api_wrapper.py"]
