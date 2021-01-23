class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    const when = new Date(data.created_at.seconds * 1000).toLocaleDateString(
      "en-US"
    );
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when.toLocaleString()}</span>
      </li>
    `;
    this.list.innerHTML += html;
  }
}
