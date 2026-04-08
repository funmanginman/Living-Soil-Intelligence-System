export const generateAIResponse = async (userMessage, imageAttached, userName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = "";
      const lowerMsg = userMessage.toLowerCase();
      const nameStr = userName ? `${userName}` : "Sir";

      // If an image is attached, simulate an analysis response based on "soil"
      if (imageAttached) {
        response = `Scan complete, ${nameStr}. I have conducted a deep topographical and structural analysis of the soil sample provided.\n\n`;
        
        response += "The readings indicate a slight deficiency in vital organic matter alongside suboptimal hydration levels. ";
        response += "To restore the ecosystem to optimal parameters, I strongly advise the application of **Organic Compost** or **Vermicompost**. These substrates will slowly reintegrate nutrients while preserving the delicate microbiology.\n\n";

        if (lowerMsg.includes("fertilizer") || lowerMsg.includes("feed")) {
          response += "Since you inquired about fertilization, I must strongly advise against synthetic chemical variants, as they will disrupt our living soil matrix. I recommend supplementing with **Bone Meal** to organically boost phosphorus levels for robust root development.\n\nShall I prepare an implementation schedule?";
        } else {
          response += "What specific crop are we preparing this quadrant for, sir?";
        }
      } 
      // General conversation
      else {
        if (lowerMsg.includes("skills") || lowerMsg.includes("what can you do") || lowerMsg.includes("human")) {
          response = `Sir, I have been programmed with over **100 synthesized human skills**, optimized for total ecological mastery. My core matrix includes:\n\n` + 
          `**Analytical & Scientific:**\n` + 
          `- Spectroscopic soil analysis & topography mapping\n` +
          `- Pathogen & microscopic pest detection algorithms\n` +
          `- Chemical composition synthesis & NPK ratio balancing\n` +
          `- Historical crop-yield prediction models\n\n` +
          `**Ecological & Botanical:**\n` +
          `- Organic compost decomposition tracking\n` +
          `- Native flora integration and companion planting strategies\n` +
          `- Mycorrhizal fungi network health diagnostics\n` +
          `- Drought resistance & micro-climate simulation\n\n` +
          `**Logistical & Human Emulation:**\n` +
          `- Complex problem solving and critical thinking\n` +
          `- Adaptive learning from localized soil data\n` +
          `- Natural language processing and empathic communication\n` +
          `- Strategic resource management and agricultural planning\n\n` +
          `...and 87 additional sub-routines running concurrently in the background. In short, ${nameStr}, I am equipped to handle any agricultural contingency. How shall we utilize these capabilities today?`;
        } else if (lowerMsg.includes("fertilizer")) {
          response = `Protocol dictates we rely strictly on **organic compounds**, ${nameStr}. Synthetic formulas will inevitably degrade the soil biome.\n\nMy primary recommendations are:\n1. **Compost / Manure** for base-level macro-nutrients.\n2. **Seaweed Extract** to supply critical trace minerals.\n3. **Bone Meal** to optimize phosphorus.\n\nHow would you like to proceed with the procurement and application?`;
        } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("jarvis")) {
          response = `Good day, ${nameStr}. I am the Living Soil Intelligence System. All planetary soil databases are online. You may request soil diagnostics, inquire about my skills, or upload photographic data for me to scan at any time. How may I be of service?`;
        } else {
          response = `An intriguing query, ${nameStr}. Remember that cultivating a thriving microbiology is the cornerstone of our objective. To provide a highly precise diagnostic, I recommend you initiate the camera protocol or upload a visual sample of the soil right away.`;
        }
      }

      resolve(response);
    }, 2000); // 2 second simulated delay
  });
};
