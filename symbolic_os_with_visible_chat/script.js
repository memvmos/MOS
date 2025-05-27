
document.getElementById("aiAgentToggle").onclick = () => {
  const box = document.getElementById("aiAgentBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
};

function handleAI() {
  const input = document.getElementById("aiInput").value;
  const thread = document.getElementById("chatThread");

  const agentResponse = "🤖 ∵: Two parts joined: " + input;

  const messageBlock = document.createElement("div");
  messageBlock.innerHTML = `<b>👤 You:</b> ${input}<br><b>${agentResponse}</b>`;
  thread.appendChild(messageBlock);

  const output = document.getElementById("aiResponse");
  output.textContent = agentResponse;

  thread.scrollTop = thread.scrollHeight;

  // Simulate updating symbolic memory (log to console)
  const symbolicReply = {
    id: "S00" + Math.floor(Math.random() * 900 + 100),
    user: input,
    agent: agentResponse,
    symbolic: {
      geometrical: input,
      normative: "∵",
      arithmetic: "?"
    },
    emotion: "curious"
  };

  console.log("Updated symbolic memory:", symbolicReply);
}
