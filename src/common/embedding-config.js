import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

env.localModelPath = "./";
// Disable the loading of remote models from the Hugging Face Hub:
env.allowRemoteModels = false;

let pipe = null;

async function initializePipeline() {
  pipe = await pipeline("feature-extraction", "models");
  return pipe;
}

window.embeddingModel = async function (description) {
  if (!pipe) {
    pipe = await initializePipeline();
  }
  // Generate the embedding from text
  const output = await pipe(description, {
    pooling: "mean",
    normalize: true,
  });
  // Extract the embedding output
  const embedding = Array.from(output.data);
  return embedding;
};

window.cosineSimilarity = function (vector1, vector2) {
    if (!vector1 || vector1.length !== vector2.length) {
      return 0.0;
    }
    let dotProduct = 0.0;
    let magnitude1 = 0.0;
    let magnitude2 = 0.0;
    for (let i = 0; i < vector1.length; i++) {
      dotProduct += vector1[i] * vector2[i];
      magnitude1 += vector1[i] * vector1[i];
      magnitude2 += vector2[i] * vector2[i];
    }
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);
    return magnitude1 && magnitude2 ? dotProduct / (magnitude1 * magnitude2) : 0.0;
  };
