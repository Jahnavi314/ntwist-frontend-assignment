document.getElementById("sortBtn").addEventListener("click", () => {
  const list = document.getElementById("nameList");
  const items = Array.from(list.getElementsByTagName("li"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  list.innerHTML = "";
  items.forEach(item => list.appendChild(item));
});