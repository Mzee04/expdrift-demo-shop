// Browser code: renders the checkout button for whichever variation the server picked.
export async function renderButton(el) {
  const res = await fetch("/api/button");
  const button = await res.json();
  el.textContent = button.label;
  if (button.primary) el.classList.add("primary");
  el.onclick = () => fetch("/api/checkout", { method: "POST" });
}
